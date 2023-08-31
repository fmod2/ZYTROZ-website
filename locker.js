const skinData = [
    {
      name: "Raptor",
      rarity: "legendary",
      imageURL: "449B25_large.webp"
    },
    {
      name: "Black Knight",
      rarity: "legendary",
      imageURL: "download__10_-removebg-preview.png"
    },
    {
      name: "Cuddle Team Leader",
      rarity: "epic",
      imageURL: "download (11).jpeg"
    },
    // Add more skin objects here
  ];
  
  const displaySkinLocker = () => {
    const skinLocker = document.getElementById('skin-locker');
  
    skinData.forEach(skin => {
      const skinElement = document.createElement('div');
      skinElement.classList.add('skin-card');
  
      const imageElement = document.createElement('img');
      imageElement.src = skin.imageURL;
      skinElement.appendChild(imageElement);
  
      const nameElement = document.createElement('div');
      nameElement.classList.add('skin-name');
      nameElement.textContent = skin.name;
      skinElement.appendChild(nameElement);
  
      const rarityElement = document.createElement('div');
      rarityElement.classList.add('rarity');
      rarityElement.textContent = skin.rarity;
      skinElement.appendChild(rarityElement);
  
      skinLocker.appendChild(skinElement);
    });
  };
  
  displaySkinLocker();