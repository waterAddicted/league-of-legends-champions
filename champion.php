<!DOCTYPE html>
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <title></title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
         body
            {
                 background-color:#101212;
            }
             table, th, td 
             {
                border: 1px solid #343941;
             }
             #back_button {
                position: absolute;
                top: 15px;
                left: 15px;
                width: 200px;
                height: 65px;
                border-radius: 15px;
                border: 3px solid white;
                transition: 0.2s all ease;
                background-color: grey;
                color: white;
                font-size: 26px;
                font-family: monospace;
                cursor: pointer;
                opacity: 0.75;
            }
            #back_button:hover {
                    border-color: grey;
                    transition: 0.2s all ease;
                    background-color: white;
                    color: grey;
                    opacity: 1;
                }
                #back_button:focus {
                    outline: none;
                }
            </style>
            </head>
        <body></body>
        <script>
            $(document).ready(function() {

                var url_string = window.location.href;
                var url = new URL(url_string);
                var param = url.searchParams.get("name");

                $.ajax({
                    url: "http://ddragon.leagueoflegends.com/cdn/11.9.1/data/en_US/champion/" + param + ".json",
                    success: function(data) {
                        const mainImage = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + param + "_0.jpg";
                        var passive = "https://ddragon.leagueoflegends.com/cdn/11.9.1/img/passive/" + data.data[param].passive.image.full;
                        var abilityQ = "https://ddragon.leagueoflegends.com/cdn/11.9.1/img/spell/" + data.data[param].spells[0].image.full;
                        var abilityW = "https://ddragon.leagueoflegends.com/cdn/11.9.1/img/spell/" + data.data[param].spells[1].image.full;
                        var abilityE = "https://ddragon.leagueoflegends.com/cdn/11.9.1/img/spell/" + data.data[param].spells[2].image.full;
                        var abilityR = "https://ddragon.leagueoflegends.com/cdn/11.9.1/img/spell/" + data.data[param].spells[3].image.full;
                        var story = data.data[param].lore;
                        var AKA = data.data[param].title;
                        var abilityQName = data.data[param].spells[0].name;
                        var abilityWName = data.data[param].spells[1].name;
                        var abilityEName = data.data[param].spells[2].name;
                        var abilityRName = data.data[param].spells[3].name;
                        var abilityPassiveName = data.data[param].passive.name;
                        var abilityQDesc = data.data[param].spells[0].description;
                        var abilityWDesc = data.data[param].spells[1].description;
                        var abilityEDesc = data.data[param].spells[2].description;
                        var abilityRDesc = data.data[param].spells[3].description;
                        var abilityPassiveDesc = data.data[param].passive.description;

                        switch (param) {
                            case "Khazix":
                                param = "Kha'Zix";
                                break;
                            case "Nunu":
                                param = "Nunu & Wilump";
                                break;
                            case "MonkeyKing":
                                param = "Wukong";
                                break;
                            case "Chogath":
                                param = "Cho'gath";
                                break;
                            case "Velkoz":
                                param = "Vel'Koz";
                                break;
                            case "LeeSin":
                                param = "Lee Sin";
                                break;
                            case "TwistedFate":
                                param = "Twisted Fate";
                                break;
                            case "JarvanIV":
                                param = "Jarvan IV";
                                break;
                            case "Leblanc":
                                param = "LeBlanc";
                                break;
                            case "XinZhao":
                                param = "Xin Zhao";
                                break;
                            case "MissFortune":
                                param = "Miss Fortune";
                                break;
                            case "MasterYi":
                                param = "Master Yi";
                                break;
                            case "DrMundo":
                                param = "Dr. Mundo";
                                break;
                            case "KogMaw":
                                param = "Kog'Maw";
                                break;
                        }

                        $("body").html('<button onclick="window.location.href=\'index.html\'" id="back_button">< BACK</button><center><img src="' + mainImage + '" width="50%" height="50%"></center><center style="font-size:70px; color:white"><i>' + param + '</i></center><center style="font-size:30px; color:white"><i>' + AKA + '</i></center><p style="border: 1px solid #343941; padding: 35px; margin-top:0px;color:whitesmoke;margin-left:1150px;font-size:25px;margin-right: 65px;">' + story + '</p><table style="width:40%;margin-top:-322px;color:whitesmoke;"><tr><th>Spell</th><th>Key</th><th>Name</th><th>Details</th></tr><tr><td><center><img src="' + passive + '" width="100px" height="100px"></center></td>q<td><center></center></td>w<td style="word-spacing:5px;"><center>' + abilityPassiveName + '</center></td><td><center>' + abilityPassiveDesc + '</center></td></tr><tr><td><center><img src="' + abilityQ + '" width="100px" height="100px"></center></td><td><center>Q</center></td><td style="word-spacing:5px;"><center>' + abilityQName + '</center></td><td><center>' + abilityQDesc + '</center></td></tr><tr><td><center><img src="' + abilityW + '" width="100px" height="100px"></center></td><td><center>W</center></td><td style="word-spacing:5px;"><center>' + abilityWName + '</center></td><td><center>' + abilityWDesc + '</center></td></tr><tr><td><center><img src="' + abilityE + '" width="100px" height="100px"></center></td><td><center>E</center></td><td style="word-spacing:5px;"><center>' + abilityEName + '</center></td><td><center>' + abilityEDesc + '</center></td></tr><tr><td><center><img src="' + abilityR + '" width="100px" height="100px"></center></td><td><center>R</center></td><td style="word-spacing:5px;"><center>' + abilityRName + '</center></td><td><center>' + abilityRDesc + '</center></td></tr></table>');

                        $("title").html(param);
                    }
                });
            });
        </script>
        </html>