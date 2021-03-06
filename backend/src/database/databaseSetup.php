<?php

require_once "./database/MySQLDatabase.php";
require_once "./database/MySQLDatabaseConnection.php";
require_once "./config.php";

foreach (glob("./database/tables/*.php") as $filename) {
    require_once $filename;
}

$tables = [
    "user" => new UserTable(),
    "logins" => new LoginTable(),
    "weakauras" => new WeakauraTable(),
    "weakauraversions" => new WeakauraVersionTable(),
    "weakauraimages" => new WeakauraImageTable(),
    "weakauracategories" => new WeakauraCategoriesTable(),
    "weakauratocategories" => new WeakauraToCategoriesTable(),
    "weakauracomments" => new WeakauraCommentsTable(),
];

$defaultEntries = [
    "user" => [
        new MySQLDatabaseEntry([
            "name" => "Suu",
            "password" => "123",
            "profilePicture" => "http://wow.zamimg.com/images/logos/construction.png",
            "description" => "Hello World",
            "email" => "test@test.com"
        ])
    ],
    "weakauras" => [
        new MySQLDatabaseEntry([
            "description" => "This is a testing weakaura.",
            "name" => "Test Weakaura 1",
            "hash" => "78aDsj82",
            "profilePicture" => "http://wow.zamimg.com/images/logos/construction.png",
            "views" => 0,
            "userId" => 1
        ]),
        new MySQLDatabaseEntry([
            "description" => "This is a testing weakaura. Number 2!",
            "name" => "Test Weakaura 2",
            "hash" => "78aDsj83",
            "profilePicture" => "http://wow.zamimg.com/images/logos/construction.png",
            "views" => 0,
            "userId" => 1
        ])
    ],
    "weakauraversions" => [
        new MySQLDatabaseEntry([
            "weakauraId" => 1,
            "versionnumber" => "1.0",
            "changes" => "Added feature x.",
            "string" => "d4MevaqjLqQgLuvCkPu1QOsvVsjLAwsPYTuLYUuf(fvkAysLJjOLPe9mPkttPY1ufTnPQ6BsrghPKohPuRtje19ucvDqQuPfsk8qPGMOQKCrPaBKucFujPmsLK0jjfvRKkLEPQentLe1nvc2PI(PuOHQKilLuuEkXuL4QkPIVQKaJvjLCwLKQ5QKkTx0FPsgSQ6WKSyLQESknzQ4YI2mPQplWOjvonKvlLsVwkfZMIBtj7wOFlPHtPwov9COMo46kSDLsFxPOXRu48sjRxjHA)QyatvPYbwsvpyjuCHLuydRsv(WuvkoXQKQxSkPmJPQK6gtvPQHSeQSKLu0tQsHRmvLsFzjeSNLqshAjKYKwsqBQuenQQuXQkfPBTkvSRLqIHnvLONTKetBjezClHqRBvQQ3vkcZBQkj3BQkHjVekD5sjAZRs4ZRsLg9sc50trndzHIffhkyklF07r3JokBQcQA(ROmdxgBBdRRalkoSqj3WwfDshUNY20Jr1iNHuqou0YvOM(If11)UlUfZBn7gRVzn1DOSrJ61JtGZ36xR7O4GWTDeVaABsrzmu8zaQglTStkb(6WMI6cOTzXJccs)cvNKZ3c7OGtJ(vQIIafnASuACHvUbArHYWBOOdaB8ISB6MBQcQpqv3CgUm22gwxbwUziftv5WcfV6MSqXAyaeleiqXbPxp6omqlwOynmaIfceOmWPRRrHXua)iP4RMKfkwddGyHabk6vxavJSqXAyaeleiq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkTAuVECcC(wyiL4WQ4rbbPhZzibkB5mC3Yqkxw4mKfkBICaDCgg(KcYHsZUX6BwtDN3DXTyOa5gWWNuq3AeVURAQmGUvZu3NVTxDBtGVoIopUbkkoiCBhXlG2MuugdfFgGQXsl7KcKBadFsXuvoSqXbPxp6omqlwOynmaIfceOOxDbunYcfRHbqSqGaLboDHTZl1GY1OWywOGrXatszHgNVKafqzYiWcfRHbqSqGafV6MSqXAyaeleiqbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceOyV1guMmcSqXAyaeleiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKIEVYkfWRafN9tXxbfKCpfWJccspluUdmuTCPd5KuaKv6qbAzNuWGcgykdC6Aera1GItUFOxFPLDszvDxnBbTyDwzkrLvIzHZqkRO(cnHw((AYMFVx)fV2QW5skl2fX3rlFFnzZV3R)IxBv4ShLM7B671Y3xt28796V41wfcugXCBgbkQbujqrxIc0bCgg(KsCyv8OGG0J5mKaNlzHsRg1RhNaNlPSjYb0X5ZokojwbdVcsQbLB1u9SWziNDCUKZUhpdBQ)Dn19uRADzVN94ShNDp0Q2DHA3FxtADxVWEnX5oodjqXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkQiYsbOAKfkwkuKfkql7KITpXjqX2N4eOypm4KabkQlG2Mfpkii9luDsoFlSJckIax3QLTjH0HZqk7nz0zHQtsXDF1ROa5gWWNuq3AeVUxDOOA5JBGIIEVYkfWRafNpPyQkhwO4G0RhDhgOfluSggaXcbcu0RUaQgzHI1WaiwiqGYaNUW25LAq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGIxDtwOynmaIfceOGTZlluWOyGj5mKaLboDDnkmMAqXxnjluSggaXcbcuS3AdktgbwOynmaIfceiqb8OGG0ZcfOLDsbdkyGPmWPRrebudk3bgQwU0HCskaYkDOmI52mcuudOsGIVcki5EkXHvXJccspMZqk6suGoGZNDuqouA2nwpbo7XcLwnQxpoboFluRp6666619mSPNnPvk1byqXKszv18g(YgxNYkR5ZgqXjXky4vqY9uuooiavJkJlWJccspMfcu0xJaLfBF1kulxuwLx032xQLVZIafFgGQXsl7KcKBauurKLcq1iluSuOiluUvt17UCgszdo7OmWPlWRIyJcsUNslo7OOm26uC2r5wnv)QXziLB1u9AgNHuUvt1RbNHuWxLj3GZqkGxfXgfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEyTA35JbLhw92D(oPbuRv7oFN0aQvV9h3E(N)5F(N)5BQxL58vXatE(l(Z32xd8jgF(U)8xE(U)8TuGUh2OJBp)Z)8p)Z)89jm8XZhdkpSwN)AF(9X2xd8jgF(U)8DsdOwRZ39NVLc094wX9rfdmz7BF7oFmO8WQF(R953hBFnWNy857(Z3jnGA1pF3F(wkq3dmk2hvmWKTV9h3E(N)5F(z0542Z)8PGVkt2IZqkdC6YxbfKCpfBFItGI9WGtkodVcq1iLWok(kOGS0YoPSzD)EtsXxbfKCg20okql7KITpXjqXxbfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8n1RYC(QyGjp)f)5B7Rb(eJpF3F(lpF3F(wkq3dB0XTN)5F(NVpHHpE(yq5HZFTpFlfO7bgf7JkgyY2F(U)8DsdOoU98p)Z)8ZOZXTN)5tb8Qi2OGS0YoPGTrELHafmO8aluGw2jfBFItGITpXjqbRZJITHaf9OicRJfkql7KITpXjqX2N4eOG15rX2qGafWJccspluUdmuTCPd5KuaKv6qbRRUzJrkyD1nBm2WA14u3mszeZTzeOOgqLIpvgXonMPYkP8IfjnXkArRVR51ynPmWPlSDAmtLvsnOKBZiqPH1Odcq1iMsuzLyw4mKsZUX6BwtDNMxJ1KafSDAmtLvYzyO2p16skdC6cRRUzJrQbLboDnIiGAqGcon6xPkkcuAydMLgOzuWa62MwVA4vaQg5EkwiVV65EkyqDBdUH1iOqrRmcu08PO5VQbu8vqbj1GIUefOd4mC5JUUUUWE9EgUBhfhe22OAjG62gmLfDBkBICaDCUm8rxxxxxt9Vu7EA)KcYHsZUX6BwtDNMxJ188FrF96FxnX7C(lP4GWTDeVaABsrzmu0xJGwyubyknUoLvwZNnGsBhyaPVfLg2GzPbAgL9Mm6Sq1jP4UV6vuudOsnO4GWxFcPlFfuaQg5SJIEVYkfWRafN9tbDRrQbfuebUUvlBtcPdNHuGCdy4tkOBnIx3fQX246AuySl0TgFCduugrWJccspluW2PXmvwjNHHA)uRljqzfxRwC2rXxbfGQro7OGIBtpo5EkMQYHfkdC6kMBtp3tzGtxBtDORjxhe3trV6cOAKfkwddGyHabkdC6cBNxQbLboDzNWEfaMK7PaktgbwOynmaIfceO4v3KfkwddGyHabkdC6ABQdDnj3tbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceO4G0RhDhgOfluSggaXcbcuUgfgZcfmkgyskl048LeOyV1guMmcSqXAyaeleiqGcgu32GxPkkcuAydMLgOzuuxaTnlEuqq6xO6KC(wyhfi3aAy1u9SWziNHCUKZUh96c1U)UM06UEH9AQhN94S7rxxtADxVWEnT85oT7wY5oodjqjoSkEuqq6XCgsX2xd8jgVs(8IWOAKZok3QP6zHZqo7ESBxVWEnT85oT7c1UFoxYz3JD76f2RPLp3PDxO29Zzpo7ESBxVWEnT85oT7c1UFce4Chlu2e5a64S)NuqouM5MNFpkqUbm8jf0TgXR7QMkdOB1m195BbELdkJaf9ELvkGxbko3rXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkMQYHfkoi96r3HbAXcfRHbqSqGaf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGaf7T2GYKrGfkwddGyHabcuuxaTnlEuqq6xO6KC(wyhfuebUUvlBtcPdNHuapkii9SqbAzNuWGcgykdC6Aera1GYDGHQLlDiNKcGSshkJyUnJaf1aQeO4RGcsUNYTAQEw4mKZooxYzhN94SJZDC29qRDDDDDDHHAVSt7EeOOlrb6ao7)jL4WQ4rbbPhZziboFYcLwnQxpoboFsztKdOJZD7EOT2AR9YEn11F3ZNuu2iUNIYXbbOAuzCbEuqq6XSqGIdc32r8cOTjfLXqXNbOAS0YoPyvDsdfvezPaunYcflfkYcLboDPm26uCpbkyq5bwOCRMQ3D5mKYgC2rXz4vaQgPe(Kslo7OGVktUbNHuWxLjBXzifFfuqYzhLboDPm26uudk3QP6xnodPOm26uAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8p)Z3NWWhpFmO8W5V2NFFS91aFIXNV7pFN0aQ2FC75F(N)5NrNJBp)ZNIYyRtXzhfOLDs5oWq1IYTAQEnJZqk3QP61GZqkkJTovPLDsbdEfkqhqGIEueH1XcfOLDsX2N4eOy7tCcuW68OyBiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKsCyv8OGG0J5mKIEVYkfWRafN7OyvDsJRwC29OhLnAuVECcC(wVhDDDD7E2ut93R)MwsXQ6KgxRyo7E0pfKdLzU55VJI6cOAeZcfmO8aluCQUUdmuT4EceOyQkhwOmWPRyUn9Cpf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGafhKE9O7WaTyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkGhfeKEwOevwjMfodP0SBS(M1u3P51ynjqPUzSXOPf1GYDGHQLlDiNKcGSshcu0LOaDaNpx(qBT1w7N7wUSx)96rXQ6Kgx2kqhfSDAmy3C)y)Et6cBNgZdRLeiqrXcbcKa"
        ]),
        new MySQLDatabaseEntry([
            "weakauraId" => 1,
            "changes" => "Added feature x.",
            "versionnumber" => "1.1",
            "string" => "d4MevaqjLqQgLuvCkPu1QOsvVsjLAwsPYTuLYUuf(fvkAysLJjOLPe9mPkttPY1ufTnPQ6BsrghPKohPuRtje19ucvDqQuPfsk8qPGMOQKCrPaBKucFujPmsLK0jjfvRKkLEPQentLe1nvc2PI(PuOHQKilLuuEkXuL4QkPIVQKaJvjLCwLKQ5QKkTx0FPsgSQ6WKSyLQESknzQ4YI2mPQplWOjvonKvlLsVwkfZMIBtj7wOFlPHtPwov9COMo46kSDLsFxPOXRu48sjRxjHA)QyatvPYbwsvpyjuCHLuydRsv(WuvkoXQKQxSkPmJPQK6gtvPQHSeQSKLu0tQsHRmvLsFzjeSNLqshAjKYKwsqBQuenQQuXQkfPBTkvSRLqIHnvLONTKetBjezClHqRBvQQ3vkcZBQkj3BQkHjVekD5sjAZRs4ZRsLg9sc50trndzHIffhkyklF07r3JokBQcQA(ROmdxgBBdRRalkoSqj3WwfDshUNY20Jr1iNHuqou0YvOM(If11)UlUfZBn7gRVzn1DOSrJ61JtGZ36xR7O4GWTDeVaABsrzmu8zaQglTStkb(6WMI6cOTzXJccs)cvNKZ3c7OGtJ(vQIIafnASuACHvUbArHYWBOOdaB8ISB6MBQcQpqv3CgUm22gwxbwUziftv5WcfV6MSqXAyaeleiqXbPxp6omqlwOynmaIfceOmWPRRrHXua)iP4RMKfkwddGyHabk6vxavJSqXAyaeleiq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkTAuVECcC(wyiL4WQ4rbbPhZzibkB5mC3Yqkxw4mKfkBICaDCgg(KcYHsZUX6BwtDN3DXTyOa5gWWNuq3AeVURAQmGUvZu3NVTxDBtGVoIopUbkkoiCBhXlG2MuugdfFgGQXsl7KcKBadFsXuvoSqXbPxp6omqlwOynmaIfceOOxDbunYcfRHbqSqGaLboDHTZl1GY1OWywOGrXatszHgNVKafqzYiWcfRHbqSqGafV6MSqXAyaeleiqbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceOyV1guMmcSqXAyaeleiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKIEVYkfWRafN9tXxbfKCpfWJccspluUdmuTCPd5KuaKv6qbAzNuWGcgykdC6Aera1GItUFOxFPLDszvDxnBbTyDwzkrLvIzHZqkRO(cnHw((AYMFVx)fV2QW5skl2fX3rlFFnzZV3R)IxBv4ShLM7B671Y3xt28796V41wfcugXCBgbkQbujqrxIc0bCgg(KsCyv8OGG0J5mKaNlzHsRg1RhNaNlPSjYb0X5ZokojwbdVcsQbLB1u9SWziNDCUKZUhpdBQ)Dn19uRADzVN94ShNDp0Q2DHA3FxtADxVWEnX5oodjqXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkQiYsbOAKfkwkuKfkql7KITpXjqX2N4eOypm4KabkQlG2Mfpkii9luDsoFlSJckIax3QLTjH0HZqk7nz0zHQtsXDF1ROa5gWWNuq3AeVUxDOOA5JBGIIEVYkfWRafNpPyQkhwO4G0RhDhgOfluSggaXcbcu0RUaQgzHI1WaiwiqGYaNUW25LAq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGIxDtwOynmaIfceOGTZlluWOyGj5mKaLboDDnkmMAqXxnjluSggaXcbcuS3AdktgbwOynmaIfceiqb8OGG0ZcfOLDsbdkyGPmWPRrebudk3bgQwU0HCskaYkDOmI52mcuudOsGIVcki5EkXHvXJccspMZqk6suGoGZNDuqouA2nwpbo7XcLwnQxpoboFluRp6666619mSPNnPvk1byqXKszv18g(YgxNYkR5ZgqXjXky4vqY9uuooiavJkJlWJccspMfcu0xJaLfBF1kulxuwLx032xQLVZIafFgGQXsl7KcKBauurKLcq1iluSuOiluUvt17UCgszdo7OmWPlWRIyJcsUNslo7OOm26uC2r5wnv)QXziLB1u9AgNHuUvt1RbNHuWxLj3GZqkGxfXgfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEyTA35JbLhw92D(oPbuRv7oFN0aQvV9h3E(N)5F(N)5BQxL58vXatE(l(Z32xd8jgF(U)8xE(U)8TuGUh2OJBp)Z)8p)Z)89jm8XZhdkpSwN)AF(9X2xd8jgF(U)8DsdOwRZ39NVLc094wX9rfdmz7BF7oFmO8WQF(R953hBFnWNy857(Z3jnGA1pF3F(wkq3dmk2hvmWKTV9h3E(N)5F(z0542Z)8PGVkt2IZqkdC6YxbfKCpfBFItGI9WGtkodVcq1iLWok(kOGS0YoPSzD)EtsXxbfKCg20okql7KITpXjqXxbfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8n1RYC(QyGjp)f)5B7Rb(eJpF3F(lpF3F(wkq3dB0XTN)5F(NVpHHpE(yq5HZFTpFlfO7bgf7JkgyY2F(U)8DsdOoU98p)Z)8ZOZXTN)5tb8Qi2OGS0YoPGTrELHafmO8aluGw2jfBFItGITpXjqbRZJITHaf9OicRJfkql7KITpXjqX2N4eOG15rX2qGafWJccspluUdmuTCPd5KuaKv6qbRRUzJrkyD1nBm2WA14u3mszeZTzeOOgqLIpvgXonMPYkP8IfjnXkArRVR51ynPmWPlSDAmtLvsnOKBZiqPH1Odcq1iMsuzLyw4mKsZUX6BwtDNMxJ1KafSDAmtLvYzyO2p16skdC6cRRUzJrQbLboDnIiGAqGcon6xPkkcuAydMLgOzuWa62MwVA4vaQg5EkwiVV65EkyqDBdUH1iOqrRmcu08PO5VQbu8vqbj1GIUefOd4mC5JUUUUWE9EgUBhfhe22OAjG62gmLfDBkBICaDCUm8rxxxxxt9Vu7EA)KcYHsZUX6BwtDNMxJ188FrF96FxnX7C(lP4GWTDeVaABsrzmu0xJGwyubyknUoLvwZNnGsBhyaPVfLg2GzPbAgL9Mm6Sq1jP4UV6vuudOsnO4GWxFcPlFfuaQg5SJIEVYkfWRafN9tbDRrQbfuebUUvlBtcPdNHuGCdy4tkOBnIx3fQX246AuySl0TgFCduugrWJccspluW2PXmvwjNHHA)uRljqzfxRwC2rXxbfGQro7OGIBtpo5EkMQYHfkdC6kMBtp3tzGtxBtDORjxhe3trV6cOAKfkwddGyHabkdC6cBNxQbLboDzNWEfaMK7PaktgbwOynmaIfceO4v3KfkwddGyHabkdC6ABQdDnj3tbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceO4G0RhDhgOfluSggaXcbcuUgfgZcfmkgyskl048LeOyV1guMmcSqXAyaeleiqGcgu32GxPkkcuAydMLgOzuuxaTnlEuqq6xO6KC(wyhfi3aAy1u9SWziNHCUKZUh96c1U)UM06UEH9AQhN94S7rxxtADxVWEnT85oT7wY5oodjqjoSkEuqq6XCgsX2xd8jgVs(8IWOAKZok3QP6zHZqo7ESBxVWEnT85oT7c1UFoxYz3JD76f2RPLp3PDxO29Zzpo7ESBxVWEnT85oT7c1UFce4Chlu2e5a64S)NuqouM5MNFpkqUbm8jf0TgXR7QMkdOB1m195BbELdkJaf9ELvkGxbko3rXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkMQYHfkoi96r3HbAXcfRHbqSqGaf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGaf7T2GYKrGfkwddGyHabcuuxaTnlEuqq6xO6KC(wyhfuebUUvlBtcPdNHuapkii9SqbAzNuWGcgykdC6Aera1GYDGHQLlDiNKcGSshkJyUnJaf1aQeO4RGcsUNYTAQEw4mKZooxYzhN94SJZDC29qRDDDDDDHHAVSt7EeOOlrb6ao7)jL4WQ4rbbPhZziboFYcLwnQxpoboFsztKdOJZD7EOT2AR9YEn11F3ZNuu2iUNIYXbbOAuzCbEuqq6XSqGIdc32r8cOTjfLXqXNbOAS0YoPyvDsdfvezPaunYcflfkYcLboDPm26uCpbkyq5bwOCRMQ3D5mKYgC2rXz4vaQgPe(Kslo7OGVktUbNHuWxLjBXzifFfuqYzhLboDPm26uudk3QP6xnodPOm26uAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8p)Z3NWWhpFmO8W5V2NFFS91aFIXNV7pFN0aQ2FC75F(N)5NrNJBp)ZNIYyRtXzhfOLDs5oWq1IYTAQEnJZqk3QP61GZqkkJTovPLDsbdEfkqhqGIEueH1XcfOLDsX2N4eOy7tCcuW68OyBiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKsCyv8OGG0J5mKIEVYkfWRafN7OyvDsJRwC29OhLnAuVECcC(wVhDDDD7E2ut93R)MwsXQ6KgxRyo7E0pfKdLzU55VJI6cOAeZcfmO8aluCQUUdmuT4EceOyQkhwOmWPRyUn9Cpf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGafhKE9O7WaTyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkGhfeKEwOevwjMfodP0SBS(M1u3P51ynjqPUzSXOPf1GYDGHQLlDiNKcGSshcu0LOaDaNpx(qBT1w7N7wUSx)96rXQ6Kgx2kqhfSDAmy3C)y)Et6cBNgZdRLeiqrXcbcKa"
        ]),
        new MySQLDatabaseEntry([
            "weakauraId" => 2,
            "versionnumber" => "1.0",
            "changes" => "Added feature x.",
            "string" => "d4MevaqjLqQgLuvCkPu1QOsvVsjLAwsPYTuLYUuf(fvkAysLJjOLPe9mPkttPY1ufTnPQ6BsrghPKohPuRtje19ucvDqQuPfsk8qPGMOQKCrPaBKucFujPmsLK0jjfvRKkLEPQentLe1nvc2PI(PuOHQKilLuuEkXuL4QkPIVQKaJvjLCwLKQ5QKkTx0FPsgSQ6WKSyLQESknzQ4YI2mPQplWOjvonKvlLsVwkfZMIBtj7wOFlPHtPwov9COMo46kSDLsFxPOXRu48sjRxjHA)QyatvPYbwsvpyjuCHLuydRsv(WuvkoXQKQxSkPmJPQK6gtvPQHSeQSKLu0tQsHRmvLsFzjeSNLqshAjKYKwsqBQuenQQuXQkfPBTkvSRLqIHnvLONTKetBjezClHqRBvQQ3vkcZBQkj3BQkHjVekD5sjAZRs4ZRsLg9sc50trndzHIffhkyklF07r3JokBQcQA(ROmdxgBBdRRalkoSqj3WwfDshUNY20Jr1iNHuqou0YvOM(If11)UlUfZBn7gRVzn1DOSrJ61JtGZ36xR7O4GWTDeVaABsrzmu8zaQglTStkb(6WMI6cOTzXJccs)cvNKZ3c7OGtJ(vQIIafnASuACHvUbArHYWBOOdaB8ISB6MBQcQpqv3CgUm22gwxbwUziftv5WcfV6MSqXAyaeleiqXbPxp6omqlwOynmaIfceOmWPRRrHXua)iP4RMKfkwddGyHabk6vxavJSqXAyaeleiq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkTAuVECcC(wyiL4WQ4rbbPhZzibkB5mC3Yqkxw4mKfkBICaDCgg(KcYHsZUX6BwtDN3DXTyOa5gWWNuq3AeVURAQmGUvZu3NVTxDBtGVoIopUbkkoiCBhXlG2MuugdfFgGQXsl7KcKBadFsXuvoSqXbPxp6omqlwOynmaIfceOOxDbunYcfRHbqSqGaLboDHTZl1GY1OWywOGrXatszHgNVKafqzYiWcfRHbqSqGafV6MSqXAyaeleiqbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceOyV1guMmcSqXAyaeleiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKIEVYkfWRafN9tXxbfKCpfWJccspluUdmuTCPd5KuaKv6qbAzNuWGcgykdC6Aera1GItUFOxFPLDszvDxnBbTyDwzkrLvIzHZqkRO(cnHw((AYMFVx)fV2QW5skl2fX3rlFFnzZV3R)IxBv4ShLM7B671Y3xt28796V41wfcugXCBgbkQbujqrxIc0bCgg(KsCyv8OGG0J5mKaNlzHsRg1RhNaNlPSjYb0X5ZokojwbdVcsQbLB1u9SWziNDCUKZUhpdBQ)Dn19uRADzVN94ShNDp0Q2DHA3FxtADxVWEnX5oodjqXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkQiYsbOAKfkwkuKfkql7KITpXjqX2N4eOypm4KabkQlG2Mfpkii9luDsoFlSJckIax3QLTjH0HZqk7nz0zHQtsXDF1ROa5gWWNuq3AeVUxDOOA5JBGIIEVYkfWRafNpPyQkhwO4G0RhDhgOfluSggaXcbcu0RUaQgzHI1WaiwiqGYaNUW25LAq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGIxDtwOynmaIfceOGTZlluWOyGj5mKaLboDDnkmMAqXxnjluSggaXcbcuS3AdktgbwOynmaIfceiqb8OGG0ZcfOLDsbdkyGPmWPRrebudk3bgQwU0HCskaYkDOmI52mcuudOsGIVcki5EkXHvXJccspMZqk6suGoGZNDuqouA2nwpbo7XcLwnQxpoboFluRp6666619mSPNnPvk1byqXKszv18g(YgxNYkR5ZgqXjXky4vqY9uuooiavJkJlWJccspMfcu0xJaLfBF1kulxuwLx032xQLVZIafFgGQXsl7KcKBauurKLcq1iluSuOiluUvt17UCgszdo7OmWPlWRIyJcsUNslo7OOm26uC2r5wnv)QXziLB1u9AgNHuUvt1RbNHuWxLj3GZqkGxfXgfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEyTA35JbLhw92D(oPbuRv7oFN0aQvV9h3E(N)5F(N)5BQxL58vXatE(l(Z32xd8jgF(U)8xE(U)8TuGUh2OJBp)Z)8p)Z)89jm8XZhdkpSwN)AF(9X2xd8jgF(U)8DsdOwRZ39NVLc094wX9rfdmz7BF7oFmO8WQF(R953hBFnWNy857(Z3jnGA1pF3F(wkq3dmk2hvmWKTV9h3E(N)5F(z0542Z)8PGVkt2IZqkdC6YxbfKCpfBFItGI9WGtkodVcq1iLWok(kOGS0YoPSzD)EtsXxbfKCg20okql7KITpXjqXxbfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8n1RYC(QyGjp)f)5B7Rb(eJpF3F(lpF3F(wkq3dB0XTN)5F(NVpHHpE(yq5HZFTpFlfO7bgf7JkgyY2F(U)8DsdOoU98p)Z)8ZOZXTN)5tb8Qi2OGS0YoPGTrELHafmO8aluGw2jfBFItGITpXjqbRZJITHaf9OicRJfkql7KITpXjqX2N4eOG15rX2qGafWJccspluUdmuTCPd5KuaKv6qbRRUzJrkyD1nBm2WA14u3mszeZTzeOOgqLIpvgXonMPYkP8IfjnXkArRVR51ynPmWPlSDAmtLvsnOKBZiqPH1Odcq1iMsuzLyw4mKsZUX6BwtDNMxJ1KafSDAmtLvYzyO2p16skdC6cRRUzJrQbLboDnIiGAqGcon6xPkkcuAydMLgOzuWa62MwVA4vaQg5EkwiVV65EkyqDBdUH1iOqrRmcu08PO5VQbu8vqbj1GIUefOd4mC5JUUUUWE9EgUBhfhe22OAjG62gmLfDBkBICaDCUm8rxxxxxt9Vu7EA)KcYHsZUX6BwtDNMxJ188FrF96FxnX7C(lP4GWTDeVaABsrzmu0xJGwyubyknUoLvwZNnGsBhyaPVfLg2GzPbAgL9Mm6Sq1jP4UV6vuudOsnO4GWxFcPlFfuaQg5SJIEVYkfWRafN9tbDRrQbfuebUUvlBtcPdNHuGCdy4tkOBnIx3fQX246AuySl0TgFCduugrWJccspluW2PXmvwjNHHA)uRljqzfxRwC2rXxbfGQro7OGIBtpo5EkMQYHfkdC6kMBtp3tzGtxBtDORjxhe3trV6cOAKfkwddGyHabkdC6cBNxQbLboDzNWEfaMK7PaktgbwOynmaIfceO4v3KfkwddGyHabkdC6ABQdDnj3tbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceO4G0RhDhgOfluSggaXcbcuUgfgZcfmkgyskl048LeOyV1guMmcSqXAyaeleiqGcgu32GxPkkcuAydMLgOzuuxaTnlEuqq6xO6KC(wyhfi3aAy1u9SWziNHCUKZUh96c1U)UM06UEH9AQhN94S7rxxtADxVWEnT85oT7wY5oodjqjoSkEuqq6XCgsX2xd8jgVs(8IWOAKZok3QP6zHZqo7ESBxVWEnT85oT7c1UFoxYz3JD76f2RPLp3PDxO29Zzpo7ESBxVWEnT85oT7c1UFce4Chlu2e5a64S)NuqouM5MNFpkqUbm8jf0TgXR7QMkdOB1m195BbELdkJaf9ELvkGxbko3rXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkMQYHfkoi96r3HbAXcfRHbqSqGaf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGaf7T2GYKrGfkwddGyHabcuuxaTnlEuqq6xO6KC(wyhfuebUUvlBtcPdNHuapkii9SqbAzNuWGcgykdC6Aera1GYDGHQLlDiNKcGSshkJyUnJaf1aQeO4RGcsUNYTAQEw4mKZooxYzhN94SJZDC29qRDDDDDDHHAVSt7EeOOlrb6ao7)jL4WQ4rbbPhZziboFYcLwnQxpoboFsztKdOJZD7EOT2AR9YEn11F3ZNuu2iUNIYXbbOAuzCbEuqq6XSqGIdc32r8cOTjfLXqXNbOAS0YoPyvDsdfvezPaunYcflfkYcLboDPm26uCpbkyq5bwOCRMQ3D5mKYgC2rXz4vaQgPe(Kslo7OGVktUbNHuWxLjBXzifFfuqYzhLboDPm26uudk3QP6xnodPOm26uAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8p)Z3NWWhpFmO8W5V2NFFS91aFIXNV7pFN0aQ2FC75F(N)5NrNJBp)ZNIYyRtXzhfOLDs5oWq1IYTAQEnJZqk3QP61GZqkkJTovPLDsbdEfkqhqGIEueH1XcfOLDsX2N4eOy7tCcuW68OyBiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKsCyv8OGG0J5mKIEVYkfWRafN7OyvDsJRwC29OhLnAuVECcC(wVhDDDD7E2ut93R)MwsXQ6KgxRyo7E0pfKdLzU55VJI6cOAeZcfmO8aluCQUUdmuT4EceOyQkhwOmWPRyUn9Cpf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGafhKE9O7WaTyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkGhfeKEwOevwjMfodP0SBS(M1u3P51ynjqPUzSXOPf1GYDGHQLlDiNKcGSshcu0LOaDaNpx(qBT1w7N7wUSx)96rXQ6Kgx2kqhfSDAmy3C)y)Et6cBNgZdRLeiqrXcbcKa"
        ])
    ],
    "weakauraimages" => [
        new MySQLDatabaseEntry([
            "weakauraId" => 1,
            "description" => "WOWHEAD logo",
            "url" => "http://wow.zamimg.com/images/logos/construction.png"
        ])
    ],
    "weakauracategories" => [
        new MySQLDatabaseEntry([ "name" => "Druid" ]),
        new MySQLDatabaseEntry([ "name" => "Monk" ]),
        new MySQLDatabaseEntry([ "name" => "Warrior" ]),
        new MySQLDatabaseEntry([ "name" => "Rogue" ]),
        new MySQLDatabaseEntry([ "name" => "Demon Hunter" ]),
        new MySQLDatabaseEntry([ "name" => "Mage"]),
    ],
    "weakauratocategories" => [
        new MySQLDatabaseEntry([ "weakauraId" => 1, "categoryId" => 1]),
        new MySQLDatabaseEntry([ "weakauraId" => 1, "categoryId" => 2]),
        new MySQLDatabaseEntry([ "weakauraId" => 1, "categoryId" => 3]),
        new MySQLDatabaseEntry([ "weakauraId" => 2, "categoryId" => 1]),
    ],
    "weakauracomments" => [
        new MySQLDatabaseEntry([ "weakauraId" => 1, "userId" => 1, "text" => "Awesome! Have been looking for this since forever! Thanks a lot!!!"]),
        new MySQLDatabaseEntry([ "weakauraId" => 1, "userId" => 1, "text" => "You rock!"]),
        new MySQLDatabaseEntry([ "weakauraId" => 2, "userId" => 1, "text" => "What is this shit, doesnt event work"]),
    ]
];

$database = new MySQLDatabase();
$databaseConnection = new MySQLDatabaseConnection(
    $config["database"]["ip"],
    $config["database"]["name"],
    $config["database"]["username"],
    $config["database"]["password"],
    $config["database"]["port"]
);

$database->connect($databaseConnection);

if ($config["environment"]["debug"]) {
    foreach (array_reverse($tables) as $table) {
        $table->remove($database);
    }
}

if ($database->isConnected()) {
    foreach ($tables as $name => $table) {
        if (!$table->add($database)) {
            echo "ERROR: COULD NOT ADD DATABASEMODEL: " . $name . "\n";
            break;
        }
    }
    foreach ($defaultEntries as $table => $entries) {
        foreach ($entries as $entry) {
            $tables[$table]->postData($database, $entry);
        }
    }
    $database->disconnect();
} else {
    echo "ERROR: COULD NOT CONNECT TO DATABASE!\n";
}
