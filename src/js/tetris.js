function tetris(){
    const tetrisView = document.querySelector(".tetris__play .view ul");

    const line_rows = 20;   // 세로
    const line_cols = 12;   // 가로
    const blocks = {
        Tmino: [
            [[2, 1],[0, 1],[1, 0],[1, 1]],
            [[1, 2],[0, 1],[1, 0],[1, 1]],
            [[1, 2],[0, 1],[2, 1],[1, 1]],
            [[1, 2],[2, 1],[1, 0],[1, 1]]
        ],
        Imino: [
            [[1, 0],[1, 1],[1, 2],[1, 3]],
            [[0, 2],[1, 2],[2, 2],[3, 2]],
            [[2, 0],[2, 1],[2, 2],[2, 3]],
            [[0, 1],[1, 1],[2, 1],[3, 1]],
        ],
        Omino: [
            [[0, 0],[1, 0],[0, 1],[1, 1]],
            [[0, 0],[1, 0],[0, 1],[1, 1]],
            [[0, 0],[1, 0],[0, 1],[1, 1]],
            [[0, 0],[1, 0],[0, 1],[1, 1]],
        ],
        Zmino: [
            [[0, 0],[2, 1],[1, 0],[1, 1]],
            [[0, 2],[0, 1],[1, 0],[1, 1]],
            [[1, 2],[0, 1],[2, 2],[1, 1]],
            [[1, 2],[2, 0],[2, 1],[1, 1]],
        ],
        Smino: [
            [[2, 0],[0, 1],[1, 0],[1, 1]],
            [[1, 2],[0, 1],[0, 0],[1, 1]],
            [[2, 1],[0, 2],[1, 2],[1, 1]],
            [[1, 0],[2, 1],[2, 2],[1, 1]],
        ],
        Jmino: [
            [[0, 2],[1, 0],[1, 1],[1, 2]],
            [[0, 0],[0, 1],[1, 1],[2, 1]],
            [[0, 0],[1, 0],[0, 1],[0, 2]],
            [[0, 0],[1, 0],[2, 0],[2, 1]],
        ],
        Lmino: [
            [[0, 0], [0, 1], [1, 2], [0, 2]],
            [[2, 0], [0, 1], [1, 1], [2, 1]],
            [[0, 0], [1, 0], [1, 1], [1, 2]],
            [[0, 0], [1, 0], [2, 0], [0, 1]] 
        ]
    }

    let score = 0;
    let duration = 500;
    let downInterval;
    let tempMovingItem;

    const movingItem = {    // 블록정보 변수
        type: "Zmino",
        direction: 0,
        top: 0,
        left: 0,
    };

    // 시작하기
    function init(){
        tempMovingItem = {...movingItem};
        // console.log(tempMovingItem)

        newLine();  // 라인 만들기
        // renderBlocks();     // 블록 만들기
        generateNewBlock();
    };

    // 라인만들기
    function newLine(){
        for(let i=0; i<line_rows; i++){
            const li = document.createElement("li");
            const ul = document.createElement("ul");

            for(let j=0; j<line_cols; j++){
                const subLi = document.createElement("li");
                ul.prepend(subLi);
            }

            li.prepend(ul);
            tetrisView.prepend(li);
        }
    }

    // 블록 만들기
    function renderBlocks(moveType=""){
        // console.log(movingItem.type);
        // console.log(movingItem.direction);
        // console.log(movingItem.top);
        // console.log(movingItem.left);
        // const type = movingItem.type;
        // const direction = movingItem.direction;
        // const top = movingItem.top;
        // const left = movingItem.left;

        const {type, direction, top, left} = tempMovingItem;
        // console.log(type, direction, top, left)

        const movingBlocks = document.querySelectorAll(".moving");
        movingBlocks.forEach(moving => {
            moving.classList.remove(type, "moving");
        });

        blocks[type][direction].some(block => {
            const x = block[0]+left;
            const y = block[1]+top;

            // console.log({tetrisView});
            const target = tetrisView.childNodes[y] ? tetrisView.childNodes[y].childNodes[0].childNodes[x] : null;
            const isAvailable = checkEmpty(target);
            if(isAvailable){
                target.classList.add(type, "moving");
            } else {
                tempMovingItem = {...movingItem};
                setTimeout(() => {
                    renderBlocks();
                    if(moveType === "top"){
                        seizeBlock();
                    }
                },0.1);
                return true;
            }
        });
        movingItem.left = left;
        movingItem.top = top;
        movingItem.direction = direction;
    };

    function seizeBlock(){
        const movingBlocks = document.querySelectorAll(".moving");
        movingBlocks.forEach(moving => {
            moving.classList.remove("moving");
            moving.classList.add("seized");
        });
        checkMatch();
    };

    function checkMatch(){
        const childNodes = tetrisView.childNodes;

        childNodes.forEach(child => {
            let matched = true;
            child.children[0].childNodes.forEach(li => {
                if(!li.classList.contains("seizes")){
                    matched = false;
                }
            });
            if(matched){
                child.remove();
                newLine();
                score++;
                scoreDiplay.innerText = score;
            }
        });

        generateNewBlock();
    };

    function generateNewBlock(){
        clearInterval(downInterval);
        downInterval = setInterval(() => {
            moveBlock("top", 1)
        }, duration);

        const blockArray = Object.entries(blocks);
        const randomIndex = Math.floor(Math.random() * blockArray.length);

        movingItem.type = blockArray[randomIndex][0];
        movingItem.top = 0;
        movingItem.left = 5;
        movingItem.direction = 0;
        tempMovingItem = {...movingItem};
        renderBlocks();
    };

    function checkEmpty(target){
        if(!target || target.classList.contains("seized")){
            return false;
        }
        return true;
    };

    function moveBlock(moveType, amount){
        tempMovingItem[moveType] += amount
        renderBlocks(moveType);
    };
    function changeDirection(){
        const direction = tempMovingItem.direction;
        direction === 3 ? tempMovingItem.direction = 0 : tempMovingItem.direction += 1;
        renderBlocks();
    };
    function dropblock(){
        clearInterval(downInterval);
        downInterval = setInterval(() => {
            moveBlock("top", 1)
        }, 10);
    };

    document.addEventListener("keydown", e => {
        switch(e.keyCode){
            case 39:
                moveBlock("left", 1);
                break;
            case 37:
                moveBlock("left", -1);
                break;
            case 40:
                moveBlock("top", 1);
                break;
            case 32:
                dropblock();
                break;
            case 38:
                changeDirection();
                break;
            default:
                break;
        }
    });

    // window.onload = function(){}    이미지까지 다 다운이 완료되어야 실행

    // 이미지 다운이 안되더라도 실행
    window.addEventListener("DOMContentLoaded", () => {
        init()
    });
};
export default tetris;