<?php
require_once "./router/controller/Controller.php";
require_once "./database/tables/WeakauraTable.php";

class ImageUploadController implements Controller
{
    private $allowed =  array('gif','png' ,'jpg');

    public function request(Request $request, array $params): string
    {
        $uploads = [];
        for ($i = 0; $i < count($_FILES["file"]["name"]); $i++) {
            array_push($uploads, $this->uploadFile($_FILES["file"], $i));
        }
        return json_encode($uploads);
    }
    
    private function uploadFile(array $files, int $index)
    {
        global $config;
        $result = [];
        $result["name"] = $files["name"][$index];
        $result["error"] = "OK";
        $result["url"] = "";

        if ($files["error"][$index] == UPLOAD_ERR_NO_FILE) {
            $result["error"] = "no file";
            return $result;
        }

        if ($files["size"][$index] > $config["imageupload"]["maxSize"]) {
            $result["error"] = "size";
            return $result;
        }

        if ($files["error"][$index] > 0) {
            $result["error"] = "unknown";
            return $result;
        }

        $name = hash('sha256', rand());
        $extension = pathinfo($files["name"][$index], PATHINFO_EXTENSION);

        if(!in_array($extension, $this->allowed) ) {
            $result["error"] = "invalid type";
            return $result;
        }

        if (!move_uploaded_file($files['tmp_name'][$index], $config["imageupload"]["directory"] . $name . "." . $extension)) {
            $result["error"] = "internal";
            return $result;
        }
        $result["url"] = $config["imageupload"]["directory"] . $name . "." . $extension;
        return $result;
    }
}
