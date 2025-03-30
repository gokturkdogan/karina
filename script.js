document.addEventListener("DOMContentLoaded", () => {
    const firstBtn = document.getElementById("firstBtn");
    const firstNotify = document.getElementById("firstNotify");
    const secondNotify = document.getElementById("secondNotify");
    const successBtn = document.getElementById("successBtn");
    const thirdNotify = document.getElementById("thirdNotify");
    const modal = document.getElementById("modal");
    const close = document.getElementById("close");

    let clickCount = 0;

    if (firstBtn) {
        firstBtn.addEventListener("click", () => {
            if (clickCount === 0) {
                firstNotify.style.bottom = "0";
                secondNotify.style.bottom = "-100px";
                thirdNotify.style.bottom = "-100px";
                firstBtn.style.transform = "translateY(50px)";
                clickCount++;
            } else if (clickCount === 1) {
                secondNotify.style.bottom = "0";
                firstNotify.style.bottom = "-100px";
                thirdNotify.style.bottom = "-100px";
                firstBtn.style.transform = "translateY(0)";
                clickCount = 0;
            }
        });
    }
    if (successBtn) {
        successBtn.addEventListener("click", () => {
            thirdNotify.style.bottom = "0";
            secondNotify.style.bottom = "-100px";
            firstNotify.style.bottom = "-100px";
            setTimeout(() => {
                modal.style.display = "flex";
                thirdNotify.style.bottom = "-100px";
            }, 4000);
            clickCount = 0;
        });
    }
    if (close) {
        close.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }
});