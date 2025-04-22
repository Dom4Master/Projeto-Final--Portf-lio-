async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Dom4Master/Projeto-Final--Portf-lio-/refs/heads/main/data/profile.json'
    const fetchData = await fetch(url)
    return await fetchData.json()
}