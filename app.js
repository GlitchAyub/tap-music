window.addEventListener('load',()=>{
    const sound = document.querySelectorAll('.sound');
    const pads =document.querySelectorAll('.pads div');

    console.log(sound);
    //sound here
    pads.forEach((pad,index)=>{
        pad.addEventListener('click',()=>{
            sound[index].currentTime=0;
            sound[index].play();
        })
    })
})
