function pausar_animacion() {
    const body = document.body;
    const anim = window.getComputedStyle(body).animationPlayState;
    body.style.animationPlayState = anim === "paused" ? "running" : "paused";
}
