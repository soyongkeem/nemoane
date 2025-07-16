document.addEventListener("DOMContentLoaded", function () {
    console.log("🚀 index.html 초기화");

    // 🌟 커서 애니메이션
    const circle = document.createElement("div");
    circle.classList.add("cursor-circle");
    document.body.appendChild(circle);

    let mouseX = 0, mouseY = 0;
    let circleX = 0, circleY = 0;
    const speed = 0.6;

    document.addEventListener("mousemove", function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        circleX += (mouseX - circleX) * speed;
        circleY += (mouseY - circleY) * speed;
        circle.style.left = `${circleX}px`;
        circle.style.top = `${circleY}px`;
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // 🌟 아스키 아트
    const asciiArtElement = document.getElementById("ascii-art");
    if (asciiArtElement) {
        const asciiArts = [
            `
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⡤⢤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⡤⠔⠒⠒⠋⠉⣉⣉⣁⣠⠤⠤⠞⢿⡲⢤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⠉⠓⣦⣄⡀⠀⡼⠛⠿⣗⡦⣄⡀⠀⢀⣻⣀⡬⠽⢶⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⠋⠀⠀⣠⢞⣿⠟⠙⠿⣗⠦⢄⡀⠉⢳⡿⠋⠉⠀⠀⠀⠀⠀⠹⡙⠦⣄⡀⠀⠀⣀⣀⣀⣀⣀⠀⠀⠀⢀⡤⢴⡾⣿⣿⣧⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⢰⢫⡾⠃⠀⠀⠀⠈⠛⠦⣍⠳⣾⣀⣀⣠⠤⠴⠒⠚⠛⠋⠉⠉⠉⠻⣾⣻⣷⣿⣿⣿⣯⡿⢷⣄⣼⣿⣡⡞⠈⣏⠙⣦⣿⠦⣄⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⡟⣿⠃⠀⠀⠀⠀⠀⠀⠀⠈⢻⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⡶⣿⣿⣷⡾⡿⣿⠏⠀⠈⠙⠛⠛⠛⠛⢛⣯⣤⡈⠓⢦⡀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢷⡀⠀⡇⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⡾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣽⢳⣸⣷⢧⢧⣿⠀⠀⣾⣿⣿⡆⠀⠀⠙⠿⣿⣃⣤⡴⠿⣦⡀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⠶⢾⣷⡀⠀⠀⠀⠀⠀⠀⠀⢠⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣸⣿⣧⣿⣿⣼⣿⠀⠀⣀⣩⣥⣤⣶⣾⠟⠛⠙⠻⢤⡀⠀⠘⣧⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⡤⠖⠊⠉⠓⢦⣄⡀⠀⠀⠀⠀⢸⠃⠀⠀⠀⢀⣀⣀⣤⠴⠶⠖⠚⠋⣉⣉⣁⣤⣶⡿⠶⠶⠾⠿⠟⠛⣿⢿⣍⠁⠘⡿⡜⢦⣀⠀⠀⢸⠿⡀⠀⠸⡆
        ⠀⠀⠀⣀⣠⡴⠖⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠉⠓⢦⣄⠀⣾⠶⣶⣾⣯⣭⣿⠶⠶⢶⣚⣛⣛⣋⣁⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⠀⠈⠳⢤⡹⣏⠲⢬⣍⣋⣁⣴⠇⠀⠀⢹
        ⠀⡴⠛⠹⢷⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣠⣤⣶⣿⡿⠛⠋⣉⣯⣶⣶⠿⠟⠛⢛⣻⣭⠭⠭⠽⠶⠦⣀⠀⠀⠀⠀⠀⠀⠈⣟⠳⣄⡀⠀⠉⠛⢿⣖⡂⠐⠛⠁⠀⠀⠀⣸
        ⢸⠁⣰⠚⠙⣮⠉⣻⡶⠒⠒⠒⠒⠒⠚⠛⠛⠉⠉⢁⣏⡞⢀⣴⡾⠟⠉⢁⣠⢴⣾⣿⣿⣶⠶⠟⠛⠛⠛⢛⡛⣷⣄⠀⠀⠀⠀⠀⣿⠀⠀⠉⠓⢤⡀⠀⠀⠉⠙⠒⠒⠦⠤⠖⠉
        ⡾⠀⣿⣿⣿⣸⣷⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡼⣾⣵⠟⠋⠀⣠⠖⣭⣶⡿⠟⣋⣥⡴⣒⠚⠙⠻⣍⠉⠉⠻⣝⢷⣤⡀⠀⠀⣿⠀⠀⠀⠀⠀⠉⠓⠦⣤⣀⠀⠀⠀⠀⠀⢀
        ⡇⠀⠘⣿⣿⠉⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⢷⡟⠁⢀⡴⠋⣰⡾⠛⣡⡴⠚⣿⣤⡀⠈⠀⠀⠀⠈⠳⣄⣀⣈⣶⡽⠿⣶⣄⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠛⠛⠙⡏
        ⡗⠀⠀⣿⣿⡄⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⠏⠀⣠⠊⣠⣾⠋⣠⣞⢹⠀⠀⠙⠉⠀⠀⠀⣀⣤⠶⠒⠛⠋⠉⠁⠀⠀⠈⠛⢿⣦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠁
        ⡇⠀⠀⣿⠿⠇⢸⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⡟⠀⡼⢃⣾⠟⣩⡟⠁⠉⠹⠆⠀⠀⠀⢀⣴⠟⠋⠁⠀⠀⠀⠀⢀⣀⣠⣴⣶⣿⣿⣿⣿⣿⣷⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡆
        ⡇⠀⠀⣿⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⢀⡿⠀⡸⠁⣼⠏⣰⢣⡀⠀⠀⠀⠀⠀⠀⣴⠟⠁⠀⠀⠀⠀⠀⣠⣶⣿⣿⡿⠟⠛⠉⠀⠀⠈⠙⠻⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⢃
        ⣧⡀⠀⡏⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⣾⠇⢀⡇⣸⡏⣼⠃⠀⠙⠂⠀⠀⠀⢀⡾⠁⠀⠀⠀⠀⢀⣴⣾⣿⡿⠛⠁⠀⠀⣀⣀⣀⣀⡀⠀⠀⠈⠻⣿⣷⡀⠀⠀⠀⠀⠀⠀⢸
        ⡇⠙⢦⡇⠀⠀⠸⡇⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⢸⡇⣿⣧⣏⠀⠀⠀⠀⠀⠀⢠⣾⠃⠀⠀⠀⠀⣴⣿⡿⠟⠁⢀⣠⣴⣾⡻⢷⣄⠀⠀⠉⠳⣄⠀⠀⠹⣿⣷⡀⠀⠀⠀⠀⠀⢸
        ⡇⠀⠀⡇⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⢸⡇⣿⣿⣿⣟⡶⠀⠀⠀⠀⣿⠃⠀⠀⠀⢀⣼⣿⠟⠀⣀⣶⣿⣿⣭⠝⣷⠈⣏⢷⡀⠀⠀⠹⣧⠀⠀⢿⣿⡇⠀⠀⠀⠀⠀⠸
        ⡇⠀⠀⣧⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⢻⡄⠸⣇⣿⣿⡇⠉⠁⠀⠀⠀⢸⡏⠀⠀⠀⠀⣾⡿⠋⢀⣼⣿⣿⡿⠋⠀⠀⣿⠀⢸⠀⢳⠀⠀⠀⠘⡇⠀⢸⣿⡇⠀⠀⠀⠀⠀⡄
        ⡇⠀⢸⡏⠱⢄⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠘⣧⠀⢿⣿⣿⡇⠀⠀⠀⠀⢠⣿⠁⠀⠀⠀⣸⡿⠃⠀⣾⣿⢻⡏⠀⠀⠀⢀⣿⠀⡼⠀⢸⠀⠀⠀⠀⡇⠀⢸⣿⡇⠀⠀⠀⠀⠀⡇
        ⣇⠀⠸⡇⠀⠀⠳⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢦⡸⣿⣿⣿⡀⠀⠀⠀⢸⡏⠀⠀⠀⢠⣿⠃⠀⢸⣿⠇⡟⠀⠀⠀⢀⣼⠏⣠⠇⠀⡼⠀⠀⠀⢠⡇⠀⢸⣿⡇⠀⠀⠀⠀⠀⡇
        ⣿⠀⠀⡇⠀⠀⠀⢹⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣇⠀⠀⠀⣼⡇⠀⠀⠀⣼⣿⠀⠀⣿⣿⣆⡀⠀⣀⣴⡿⢋⣴⠋⢀⡜⠁⠀⠀⠀⡾⠀⢠⣿⡟⠀⠀⠀⠀⠀⢠⠁
        ⢾⣄⠀⡇⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠿⣿⡆⠀⠀⢻⡁⠀⠀⠀⣿⣿⠀⠀⣟⢿⣿⣍⠉⢉⣡⣴⠟⣁⡴⠋⠀⠀⠀⠀⡼⠁⣠⣿⡟⠀⠀⠀⠀⣀⡤⠊⠀
        ⠀⠙⢶⣇⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⠲⣼⣿⠀⠀⠀⣿⣿⠀⠀⣷⠀⠉⠛⠛⠛⠛⠒⠊⠁⠀⠀⠀⠀⢀⡜⠁⣴⣿⡿⠉⠉⠉⠉⠉⠀⠀⠀⠀
        ⠀⠀⠀⠙⢦⡀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣤⠽⢿⣦⡀⠀⠸⣿⡆⠀⠸⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡴⠋⣠⣾⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠙⢦⣸⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣤⡤⠴⠒⠚⠉⠉⠀⠀⠀⠀⠈⠙⢦⡀⢻⣿⡄⠀⠻⣦⣀⠀⠀⠀⠀⢀⣠⡤⠚⢫⣣⣾⣿⡟⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠙⠒⠒⠒⠒⠒⠋⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⢿⣿⣆⡀⠀⠉⠙⠒⠲⠚⠉⣀⣠⣴⣾⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣻⣿⣶⣤⣤⣴⣶⣶⣿⣿⣿⠛⠉⠀
`
,
`     
.+"+.+"+.+"+.+"+.+"+.+"+.+"+.+"+.+"+.+"+.+"+.+"+.+"+.+"+.+"+.+"+.+"+.+"+.+"+.+"+.+"+.+"+.+"+. 
(    888b    888 8888888888 888b     d888  .d88888b.         d8888 888b    888 8888888888     )
 )   8888b   888 888        8888b   d8888 d88P" "Y88b       d88888 8888b   888 888           ( 
(    88888b  888 888        88888b.d88888 888     888      d88P888 88888b  888 888            )
 )   888Y88b 888 8888888    888Y88888P888 888     888     d88P 888 888Y88b 888 8888888       ( 
(    888 Y88b888 888        888 Y888P 888 888     888    d88P  888 888 Y88b888 888            )
 )   888  Y88888 888        888  Y8P  888 888     888   d88P   888 888  Y88888 888           ( 
(    888   Y8888 888        888   "   888 Y88b. .d88P  d8888888888 888   Y8888 888            )
 )   888    Y888 8888888888 888       888  "Y88888P"  d88P     888 888    Y888 8888888888    ( 
 "+.+"+.+"+.+"+.+"+.+"+.+"+.+"+.+"+.+"+.+"+.+"+.+"+.+"+.+"+.+"+.+"+.+"+.+"+.+"+.+"+.+"+.+"+.+" 
`,
`                        .,,uod8B8bou,,.
                ..,uod8BBBBBBBBBBBBBBBBRPFT?l!i:.
            ,=m8BBBBBBBBBBBBBBBRPFT?!||||||||||||||
            !...:!TVBBBRPFT||||||||||!!^^""'   ||||
            !.......:!?|||||!!^^""'            ||||
            !.........||||                     ||||
            !.........||||      Indesign       ||||
            !.........||||      Illustrator    ||||
            !.........||||      PhotoShop      ||||
            !.........||||      Lightroom       ||||
            '.........||||                    ,||||
            .;.......||||               _.-!!|||||
    .,uodWBBBBb.....||||       _.-!!|||||||||!:'
    !YBBBBBBBBBBBBBBb..!|||:..-!!|||||||!iof68BBBBBb....
    !..YBBBBBBBBBBBBBBb!!||||||||!iof68BBBBBBRPFT?!::   '.
    !....YBBBBBBBBBBBBBBbaaitf68BBBBBBRPFT?!:::::::::     '.
    !......YBBBBBBBBBBBBBBBBBBBRPFT?!::::::;:!^"';:::       '.
    !........YBBBBBBBBBBRPFT?!::::::::::^''...::::::;         iBBbo.
    '..........YBRPFT?!::::::::::::::::::::::::;iof68bo.      WBBBBbo.
    '..........:::::::::::::::::::::::;iof688888888888b.     'YBBBP^'
        '........::::::::::::::::;iof688888888888888888888b.     '
        '......:::::::::;iof688888888888888888888888888888b.
            '....:::;iof688888888888888888888888888888888899fT!
            '..::!8888888888888888888888888888888899fT|!^"'
                '' !!988888888888888888888888899fT|!^"'
                    '!!8888888888888888899fT|!^"'
                    '!988888888899fT|!^"'
                        '!9899fT|!^"'
                        '!^"'`,
`    *        .              .   *
                    .           
        *     '       *   .  *       
            * .    '     ( Premiere Pro )
                        ( Davinci Resolve )
        ' .                      /  .   *
                .-'~~~~'-.   /
        .      .-~\\__/  \\__/'~-.         .
            .-~   (oo)  (oo)    ~-.
            (_____//~~\\\\//~~\\\\______)
    _.-~'                         '~-._
    /O=O=O=O=O=O=O=O=O=O=O=O=O=O=O=O=O=O\\     *
    \\___________________________________/.
        JRO      \\ x x x x x x x/            '.
        .  *     \\ x_x_x_x_x_x/.    '  .     ___   .
                '.           '.         .'| \\'.
                    '.     .     '.       | \\ / |
        ' .     *                          '.___.'`,
`    .------.------.    
    +-------------+                     ___        |      |      |    
    |             |                     \\ /]       |      |      |    
    |   DAVINCI   |        _           _(_)        |      |      |    
    |     618     |     ___))         [  | \\___    |      |      |    
    |             |     ) //o          | |     \\   |      |      |    
    |             |  _ (_    >         | |      ]  |      |      |    
    |          __ | (O)  \\__<          | | ____/   '------'------'    
    |         /  o| [/] /   \\)        [__|/_                          
    |             | [\\]|  ( \\         __/___\\_____                    
    |             | [/] |   \\ \\__  ___|            |                   
    |             | [\\]|    \\___E/%%/|____________|_____              
    |             | [/] |=====__   (_____________________)             
    |             | [\\] \\_____ \\    |                  |              
    |             | [/]========\\ |   |                  |              
    |             | [\\]     []| |   |                  |              
    |             | [/]     []| |_  |                  |              
    |             | [\\]     []|___) |                  |              
    ====================================================================`
        ];

        let currentIndex = 0;

        // 화면 클릭 시 아트 변경 (사이드바 클릭 제외)
        document.addEventListener("click", function (e) {
            const sidebar = document.querySelector(".sidebar");
            if (sidebar && sidebar.contains(e.target)) {
                return; // 사이드바 내부 클릭은 무시
            }
            currentIndex = (currentIndex + 1) % asciiArts.length;
            asciiArtElement.textContent = asciiArts[currentIndex];
        });
    } else {
        console.warn("ascii-art 요소가 없습니다. id 확인!");
    }
});

//news db
fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vQxmzrw_8wtMVlWn-8kRlygSU77Mp7pTf1IWOxX6ABIh7-cp5d5eTPOjxyNpevll9jHzjyieod8AcAC/pub?output=csv")
  .then(res => res.text())
  .then(data => {
    const parsed = Papa.parse(data, { header: true });
    let html = '';
    parsed.data.forEach(row => {
      if (!row.title) return; // 빈 행 방지

      const links = [];
if (row.link) {
  links.push(`<a href="${row.link}" target="_blank" style="text-decoration: underline; margin-right: 10px; display: inline-block;">더 알아보기</a>`);
}

      html += `
        <div class="news-item" style="display: flex; gap: 20px; align-items: flex-start;">
          <div style="flex: 1; word-break: break-word; overflow-wrap: break-word;">
            <h3 class="news-title" style="margin: 0 0 5px 0;">${row.title}</h3>
            <span class="news-date" style="color: gray; display: block; text-align: left; margin-bottom: 10px;">${row.date || ''}</span>
            <p style="font-weight: bold;">${row.description || ''}</p>
            <p>${row.body || ''}</p>
            ${links.length ? `<p>${links.join('')}</p>` : ''}
          </div>
          ${row.image ? `
            <div style="flex-shrink: 0;">
              <img src="${row.image}" alt="${row.title}" style="height: 400px; width: auto; display: block;">
            </div>
          ` : ''}
        </div>
        <hr>
      `;
    });
    document.getElementById('news-container').innerHTML = html || '소식이 없습니다.';
  })
  .catch(err => {
    console.error('데이터 로드 실패:', err);
    document.getElementById('news-container').innerText = '데이터 로드 실패';
  });


  //archive db
fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vQ8NliQPcjujheJX7EE7kjzfGypeg2o7trgtlhwZx2-l_QSPBly6u6fMh78QkA4RL8Fh08so9M5lrFF/pub?output=csv")
  .then(res => res.text())
  .then(data => {
    const parsed = Papa.parse(data, { header: true });
    let html = '';
    parsed.data.forEach(row => {
      if (!row.title) return;

html += `
  <div class="archive-item" style="margin-bottom: 20px;">
    <h3>${row.title}</h3>
    <span style="color: gray;">${row.date || ''}</span>
    <p><strong>${row.description || ''}</strong></p>
    <p>${row.body || ''}</p>
    ${row.link ? `
      <p>
        <a href="${row.link}" target="_blank" style="text-decoration: underline; margin-right: 10px; display: inline-block;">더 알아보기</a>
      </p>` : ''}

  </div>
  <hr>
`;

    });

    document.getElementById('archive-container').innerHTML = html || '데이터가 없습니다.';
  })
  .catch(err => {
    console.error('데이터 로드 실패:', err);
    document.getElementById('archive-container').innerText = '데이터 로드 실패';
  });




document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const sidebar = document.querySelector(".sidebar");

    hamburger.addEventListener("click", function () {
        // 햄버거와 사이드바 active 토글
        hamburger.classList.toggle("active");
        sidebar.classList.toggle("active");

        // 아이콘 문자 변경
        if (hamburger.classList.contains("active")) {
            hamburger.innerHTML = "✕";
        } else {
            hamburger.innerHTML = "&#9776;";  // 햄버거(☰)
        }
    });
});

// 현재 페이지 URL을 기반으로 active 클래스 추가
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const menuLinks = document.querySelectorAll('.menu a');
    
    menuLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
    
    // 메뉴 클릭시 active 상태 변경
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            // 모든 메뉴에서 active 제거
            menuLinks.forEach(a => a.classList.remove('active'));
            // 클릭한 메뉴에 active 추가
            this.classList.add('active');
        });
    });
});