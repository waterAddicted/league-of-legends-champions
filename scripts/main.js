$(document).ready(function() {
    $.ajax({
        url: "http://ddragon.leagueoflegends.com/cdn/11.9.1/data/en_US/champion.json",
        success: function(data) {
            for (var key in data.data) {
                let param = key;
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
                    case "Kaisa":
                        param = "Kai'sa";
                        break;
                    case "AurelionSol":
                        param = "Aurelion Sol";
                        break;
                    case "RekSai":
                        param = "Rek'Sai";
                        break;
                    default:
                        break;
                }
                
                $("#main_container_div").append('<a href="champion.php?name=' + key + '"><div class="each_card_champ_main_container"><img src="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + key + '_0.jpg" class="each_champ_picture" /><div class="inner_each_champ_name_container"><p class="each_champ_name">' + param + '</p><p class="each_champ_aka">- ' + data.data[key].title + ' -</p></div></div></a>');
            }
        }
    });

    const arr = [];
    const copyArr = [];
    const AKAArr = [];

    $.ajax({
        url: "http://ddragon.leagueoflegends.com/cdn/11.8.1/data/en_US/champion.json",
        success: function(data) {
            for (var key in data.data) {
                copyArr.push(key);
                AKAArr.push(data.data[key].title);
                key = key.toLowerCase();
                arr.push(key);
            }
        }
    });

    $(document).on("keyup", "#search_champ_input", function() {
        var param = $(this).val();
        param = param.toLowerCase();

        if (param != '') {
            $("#main_container_div").empty();
            var container = "";
            var champCounter = 0;
            for (var key in arr) {
                if (arr[key].includes(param)) {
                    ++champCounter;
                    let copyString = copyArr[key];

                    switch (copyString) {
                        case "Khazix":
                            copyString = "Kha'Zix";
                            break;
                        case "Nunu":
                            copyString = "Nunu & Wilump";
                            break;
                        case "MonkeyKing":
                            copyString = "Wukong";
                            break;
                        case "Chogath":
                            copyString = "Cho'gath";
                            break;
                        case "Velkoz":
                            copyString = "Vel'Koz";
                            break;
                        case "LeeSin":
                            copyString = "Lee Sin";
                            break;
                        case "TwistedFate":
                            copyString = "Twisted Fate";
                            break;
                        case "JarvanIV":
                            copyString = "Jarvan IV";
                            break;
                        case "Leblanc":
                            copyString = "LeBlanc";
                            break;
                        case "XinZhao":
                            copyString = "Xin Zhao";
                            break;
                        case "MissFortune":
                            copyString = "Miss Fortune";
                            break;
                        case "MasterYi":
                            copyString = "Master Yi";
                            break;
                        case "DrMundo":
                            copyString = "Dr. Mundo";
                            break;
                        case "KogMaw":
                            copyString = "Kog'Maw";
                            break;
                        case "Kaisa":
                            copyString = "Kai'sa";
                            break;
                        case "AurelionSol":
                            copyString = "Aurelion Sol";
                            break;
                        case "RekSai":
                            copyString = "Rek'Sai";
                            break;
                        default:
                            break;
                    }

                    container += '<a href="champion.php?name=' + copyArr[key] + '"><div class="each_card_champ_main_container"><img src="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + copyArr[key] + '_0.jpg" class="each_champ_picture" /><div class="inner_each_champ_name_container"><p class="each_champ_name">' + copyString + '</p><p class="each_champ_aka">- ' + AKAArr[key] + ' -</p></div></div></a>';
                }
            }
            if (champCounter == 0) {
                container += '<p id="no_champ_found_label">No champion found!</p>';
            }
            $("#main_container_div").append(container);
        } else {
            $("#main_container_div").empty();
            $.ajax({
                url: "http://ddragon.leagueoflegends.com/cdn/11.9.1/data/en_US/champion.json",
                success: function(data) {
                    for (var key in data.data) {
                        let param = key;
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
                            case "Kaisa":
                                param = "Kai'sa";
                                break;
                            case "AurelionSol":
                                param = "Aurelion Sol";
                                break;
                            case "RekSai":
                                param = "Rek'Sai";
                                break;
                            default:
                                break;
                        }
                        
                        $("#main_container_div").append('<a href="champion.php?name=' + key + '"><div class="each_card_champ_main_container"><img src="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + key + '_0.jpg" class="each_champ_picture" /><div class="inner_each_champ_name_container"><p class="each_champ_name">' + param + '</p><p class="each_champ_aka">- ' + data.data[key].title + ' -</p></div></div></a>');
                    }
                }
            });
        }
    });

    document.addEventListener("scroll", function(e) {
        if ($("body").scrollTop() > 600) {
            $("#scroll_up_arrow_image").css("display", "block");
        } else {
            $("#scroll_up_arrow_image").css("display", "none");
        }
    }, true);

    $(document).on("click", "#scroll_up_arrow_image", function() {
        $("body").animate({
            scrollTop: 0
        }, 500);
    });
});