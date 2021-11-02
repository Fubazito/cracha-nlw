const LinksSocialMedia = {
  github: 'fubazito',
  youtube: 'channel/UC_Yyoks0rGo2CG-Crq4TFOQ',
  instagram: 'fubazito',
  twitter: 'fubazito4'
}

function changeSocialMediaLinks() {
  for(let li of socialLinks.children) {
      const social = li.getAttribute('class')
      
      li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userProfile.src = data.avatar_url
    userLogin.textContent = data.login
  })
}

getGithubProfileInfos()