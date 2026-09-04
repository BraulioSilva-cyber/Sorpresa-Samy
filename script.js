onload = () => {
  document.body.classList.remove("not-loaded");
  
  const field = document.getElementById('flower-field');
  
  // Detecta si es un celular para reducir la cantidad de flores a la mitad y evitar lag
  const isMobile = window.innerWidth < 768;
  const cols = isMobile ? 6 : 12; 
  const rows = isMobile ? 8 : 8;  
  
  const cellWidth = 100 / cols;
  const cellHeight = 100 / rows;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      
      const isCenterRow = r >= Math.floor(rows / 2) - 1 && r <= Math.floor(rows / 2) + 1;
      const isCenterCol = c >= Math.floor(cols / 2) - 1 && c <= Math.floor(cols / 2);

      if (isCenterRow && isCenterCol) {
        continue; 
      }

      const flower = document.createElement('div');
      flower.classList.add('flower');
      
      const jitterX = (Math.random() - 0.5) * (cellWidth * 1.5);
      const jitterY = (Math.random() - 0.5) * (cellHeight * 1.5);
      
      const leftPosition = (c * cellWidth) + (cellWidth / 2) + jitterX; 
      const topPosition = (r * cellHeight) + (cellHeight / 2) + jitterY; 
      
      // En móviles, hacemos las flores un pelín más pequeñas
      const scaleBase = isMobile ? 0.3 : 0.4;
      const scale = Math.random() * scaleBase + 0.15;     
      const delay = Math.random() * 3.5 + 0.5;         
      
      const spinSpeed = Math.random() * 25 + 15; 
      const spinDir = Math.random() > 0.5 ? 'normal' : 'reverse';
      
      const finalLeft = Math.max(2, Math.min(98, leftPosition));
      const finalTop = Math.max(2, Math.min(98, topPosition));

      flower.style.left = `${finalLeft}%`;
      flower.style.top = `${finalTop}%`;
      
      flower.style.setProperty('--scale', scale);
      flower.style.setProperty('--delay', `${delay}s`);
      flower.style.setProperty('--spin-speed', `${spinSpeed}s`);
      flower.style.setProperty('--spin-dir', spinDir);
      
      flower.style.zIndex = Math.floor(scale * 10);
      
      flower.innerHTML = `
        <div class="flower__leafs">
          <div class="flower__leaf flower__leaf--1"></div>
          <div class="flower__leaf flower__leaf--2"></div>
          <div class="flower__leaf flower__leaf--3"></div>
          <div class="flower__leaf flower__leaf--4"></div>
          <div class="flower__leaf flower__leaf--5"></div>
          <div class="flower__leaf flower__leaf--6"></div>
          <div class="flower__leaf flower__leaf--7"></div>
          <div class="flower__leaf flower__leaf--8"></div>
          <div class="flower__leaf flower__leaf--9"></div>
          <div class="flower__leaf flower__leaf--10"></div>
          <div class="flower__leaf flower__leaf--11"></div>
          <div class="flower__leaf flower__leaf--12"></div>
          <div class="flower__center"></div>
        </div>
      `;
      
      field.appendChild(flower);
    }
  }
};