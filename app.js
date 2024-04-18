const playVideo = () => {
    const tl = gsap.timeline();

    tl.to('i', {
        opacity: 1,
        duration: 3,
        rotate: 36000
    });
    tl.to('i', {
        opacity: 0,
        duration: 0.01,
        ease: "power1.out"
    });

    tl.from('.main', {
        opacity: 0,
        duration: 0.4
    });
    tl.to('nav .links a', {
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        onComplete: () => {
            setTimeout(() => {
                const videoElement = document.querySelector('video');
                videoElement.setAttribute('autoplay', 'autoplay');

                videoElement.addEventListener('click', () => {
                    if (videoElement.paused) {
                        videoElement.play();
                    } else {
                        videoElement.pause();
                    }
                });
                document.addEventListener('keydown',function(e){
                    e.preventDefault()
                    if(e.key === 'f'|| e.key === 'F'){
                        if(!document.fullscreenElement){
                            videoElement.requestFullscreen();
                        }else{
                            document.exitFullscreen()
                        }
                    }
                })
            }, 0); 
        }
    });
    tl.to('#tanjiro img',{
        opacity:1
    })
    tl.to('.nav2 a', {
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
    });
    gsap.set('.centerText h1', {
        y: 400,
        opacity: 0,
        zIndex: -3
    });
    tl.to('.centerText h1', {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.2,
        ease: "power1.out",
        zIndex: 1,
        
    });
    tl.to('.center h6', {
        opacity: 1,
        duration: 0.1
    });
};

window.onload = playVideo;
