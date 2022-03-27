// console.log("This is index.js");

// Data is an array of objects which contains the information about the candidates

const data = [
    {
        name: "Abhinav Kumar Jha",
        age: 21,
        city: "Bangalore",
        languages: "JavaScript",
        framework: "Node",
        image: "https://randomuser.me/api/portraits/men/67.jpg",
    },
    
    {
        name: "Nora Fatehi",
        age: 30,
        city: "Mumbai",
        languages: "CPP",
        framework: ".NET Core",
        image: "https://randomuser.me/api/portraits/women/67.jpg",
    },

    
    {
        name: "Shubham Sharma",
        age: 28,
        city: "Kolkata",
        languages: "Python",
        framework: "Django",
        image: "https://randomuser.me/api/portraits/men/54.jpg",
    },
    
    {
        name: "Aishwarya Rai",
        age: 48,
        city: "Mumbai",
        languages: "Python",
        framework: "Flask",
        image: "https://randomuser.me/api/portraits/women/57.jpg",
    },
    
    {
        name: "Tom Cruise",
        age: 59,
        city: "Vegas",
        languages: "JavaScript",
        framework: "React",
        image: "https://randomuser.me/api/portraits/men/61.jpg",
    },
    
    {
        name: "Camila Cabello",
        age: 25,
        city: "New York",
        languages: "JavaScript",
        framework: "Express",
        image: "https://randomuser.me/api/portraits/women/55.jpg",
    },

    {
        name: "Hrithik Roshan",
        age: 48,
        city: "Pune",
        languages: "Python",
        framework: "Panda",
        image: "https://randomuser.me/api/portraits/men/91.jpg",
    },

    {
        name: "Katherine Langford",
        age: 25,
        city: "Perth",
        languages: "Python",
        framework: "Grok",
        image: "https://randomuser.me/api/portraits/women/71.jpg",
    },

    {
        name: "Ayushmann Khurrana",
        age: 37,
        city: "Chandigarh",
        languages: "JavaScript",
        framework: "Vue",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
    },

    {
        name: "Naomi Scott",
        age: 28,
        city: "Hounslow",
        languages: "JavaScript",
        framework: "Ember",
        image: "https://randomuser.me/api/portraits/women/91.jpg",
    },
];

// CV Iterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length
                ? { value: profiles[nextIndex++], done: false }
                : { done: true };
        },
    };
}

const candidates = cvIterator(data);
nextCV();

const button = document.getElementById("button");
button.addEventListener("click", nextCV);

function nextCV() {
    const currentCandidate = candidates.next().value;

    let image = document.getElementById("image");
    let profile = document.getElementById("profile");

    if (currentCandidate != undefined) {
        image.innerHTML = ` <img src='${currentCandidate.image}'>`;
        profile.innerHTML = `<ul class="list-group">
        <li class="list-group-item">Name: <b>${currentCandidate.name}</b></li>
        <li class="list-group-item">Age: <b>${currentCandidate.age}</b> years old</li>
        <li class="list-group-item">Lives in <b>${currentCandidate.city}</b></li>
        <li class="list-group-item">Primarily works on <b>${currentCandidate.languages}</b> with <b>${currentCandidate.framework}</b> framework</li>
        </ul>`;
    } else {
        alert("End of Applications");
        window.location.reload();
    }
}
