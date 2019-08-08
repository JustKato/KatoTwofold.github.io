function PreLoadContainers() {
    $.ajax({
        url: `https://raw.githubusercontent.com/KatoTwofold/KatoTwofold.github.io/master/Database/containers.json`,
        type: `get`,
        complete: (msg) => {
            if (msg.status == 200) {
                LoadContainers(JSON.parse(msg.responseText));
            } else {
                console.error("There has been an error loading the database, disabling the website.")
            }
        }
    })
}

function LoadContainers(container_data) {
    let about = container_data.about;
    let experience = container_data.experience;
    let projects = container_data.projects;

    for (let i = 0; i < projects.length; i++) {
        let html =
            `
            <div class="section">
                <div class="bg-img" style="background-image: url('${projects[i]["bg-image"]}')"></div>
                <div class="bg-gradient"></div>
                <div class="section-title">${projects[i].title}</div>
                <div class="description">${projects[i].description}</div>
            </div>
            `;
        $('.container[category="projects"]').append(html);
    }

}