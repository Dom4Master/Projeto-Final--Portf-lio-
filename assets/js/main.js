function updateProfileInfo (profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`

}

function updateSoftSkills (profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')

    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')

}

function updateHardSkills (profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')

    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<img src="${skill.logo}" alt="${skill.name}" title="${skill.name}" />`).join('')

}

function updateLanguages (profileData) {
    const languages = document.getElementById('profile.languages')

    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

function updateProjects (profileData) {
    const projects = document.getElementById('profile.projects')

    projects.innerHTML = profileData.portfolio.map(project => {
        return `
            <li>
                <h3 ${project.github ? 'class="github"' : ''}>${project.name}</h3>
                <a href="${project.url}" target="_blank">${project.url}</a> 
            </li>
        `
    }).join('')
}

function updateExperiences (profileData) {
    const experiences = document.getElementById('profile.experiences')

    experiences.innerHTML = profileData.professionalExperience.map(experience => {
        return `
            <li>
                <h3 class="title">${experience.name}</h3>
                <span class="period">${experience.period}</span>
                <p>${experience.description}</p>
            </li>
        `
    }).join('')

}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updateProjects(profileData)
    updateExperiences(profileData)
}) ()