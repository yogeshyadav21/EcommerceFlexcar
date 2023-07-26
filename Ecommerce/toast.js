const toastContainer = document.getElementById("toast-container");

const Toast = {
    delay: 4000,
    htmlToElement: (html)=>{
        const template = document.createElement("template");
        html = html.trim();
        template.innerHTML = html;
        return template.content.firstChild;
    },
    show: (title,message,color,delay)=>{
        title = title?title:"";
        const html = `
        <div class="toast align-items-center mt-1 text-white bg-${color} border-0" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body">
                    <b>${title}</b>
                    <div>${message}</div>
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>`;
        const toastElement = Toast.htmlToElement(html);
        toastContainer.appendChild(toastElement);
        const toast = new bootstrap.Toast(toastElement,{
            delay: delay?delay:Toast.delay,
            animation: true,
        });
        toast.show();
        setTimeout(()=> toastElement.remove(),delay?delay:Toast.delay+3000);
    },
}