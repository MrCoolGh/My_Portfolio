//toggle icon menu
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

                   //Scroll srctions//
 let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscrollY = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){

            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector(`header nav a[href*=' + id +']`).classList.add('active');
            })
        }
    })

    // sticker Header//
    let hearder = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    //Remove navbar link and click//
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}









                      // developer//
new Typed('.text', {
    "strings": ['Web Developer','Database Analyst', 'FullStack Developer','Programmer','Software Engineer'],
    "backSpeed": 60,
    "typeSpeed": 100,
    "backDelay": 1000,
    "loop": true
});



//send email form//
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");


function sendEmail(){
    const bodyMessage = `Full Name: ${fullName.value}<br> 
Email: ${email.value}<br> 
Phone: ${phone.value}<br> 
subject: ${subject.value}<br> 
Message: ${mess.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "pd855000@gmail.com",
        Password : "3B3A6FB53E1295435E8940AE1677464CED37",
        To : 'pd855000@gmail.com',
        From : "pd855000@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
        message => {
            if(message == "OK"){
                Swal.fire({
                    title: "Success!",
                    text: "Your message has been sent!",
                    icon: "success"
                });
            }
        }
    );
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    sendEmail();
})

