<?php
require_once "./router/controller/Controller.php";
require_once "./database/tables/WeakauraTable.php";

class ImageUploadController implements Controller
{
    public function request(Request $request, array $params): string
    {
        global $database;
        global $config;

        if ($_FILES["file"]["error"] == UPLOAD_ERR_NO_FILE) {
                return "ERROR nofile";
        }

        if ($_FILES["file"]["size"] > $config["imageupload"]["maxSize"]) {
            return "ERROR size";
        }

        if ($_FILES["file"]["error"] > 0) {
            return "ERROR unknown";
        }

        $name = hash('sha256', rand());
        $extension = pathinfo($_FILES["file"]["name"], PATHINFO_EXTENSION);
        if (!move_uploaded_file($_FILES['file']['tmp_name'], $config["imageupload"]["directory"] . $name . "." . $extension)) {
            return "ERROR internal";
        }
        return $config["imageupload"]["directory"] . $name . "." . $extension;
    }
}
