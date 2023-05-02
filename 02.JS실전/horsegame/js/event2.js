console.log('외부 js 파일')


let move = 0;


// Step1. moveLeft 함수와, moveRight 함수를 선언 
const moveLeft = ()=>{
    console.log('moveLeft')
    if (move < 1100){
        move += 50
        let horse = document.querySelector('#horse').style.right = move + 'px'
    }
}

const moveRight = ()=>{
    console.log('moveRight')
    if(move > 0){
        move -= 50
        document.querySelector('#horse').style.right = move + 'px'
    }
}

// Step2. left 버튼을 누르면 moveLeft 함수를 호출 
//         2-1. 말이 왼쪽으로 50px씩 이동 
//         2-2. 단, 말이 판을 벗어나지 않도록 할 것 

document.querySelector('.left').addEventListener('click', moveLeft)
document.querySelector('.right').addEventListener('click', moveRight)

// Step3. right 버튼을 누르면 moveRight 함수를 호출 
//         3-1. 말이 오른쪽으로 50px씩 이동 
//         3-2. 단, 말이 판을 벗어나지 않도록 할 것 

// 힌트1) 오른쪽과 왼쪽은 하나의 축으로 이어져있다! 
// 힌트2) js 로 하는게 헷갈리면 css로 가서 값을 한번 줘볼 것

// 화살표 방향키를 눌렀을 때 이동하도록 해줄 것

const jump = () => {
    document.getElementById('horse').animate([
        {bottom : '200px'}
        ,{bottom : '400px'}
        ,{bottom : '200px'}
    ],{
        duration : 700 // 1000이 1초
    })
}

// body태그 내에서 있는 모든 방향키 이벤트를 잡아줘야 함
document.getElementsByTagName('body')[0].addEventListener('keydown',(e)=>{
    console.log('keydown',e.key)
    if(e.key === 'ArrowLeft'){
        moveLeft()
    }else if (e.key === 'ArrowRight'){
        moveRight()
    }else if (e.key == ' '){
        jump()
    }
})