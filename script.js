// script.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('upload-form');
  if (form) {
    const resultado = document.getElementById('resultado');
    const imagensPreview = document.getElementById('imagensPreview');
    const sugestoes = document.getElementById('sugestoes');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      imagensPreview.innerHTML = '';
      sugestoes.innerHTML = '';
      resultado.style.display = 'block';

      const fotos = [
        form.fotoFrontal.files[0],
        form.fotoPerfil.files[0],
        form.fotoTresQuartos.files[0]
      ];

      fotos.forEach((foto) => {
        if (foto) {
          const img = document.createElement('img');
          img.src = URL.createObjectURL(foto);
          img.style.width = '150px';
          img.style.borderRadius = '8px';
          imagensPreview.appendChild(img);
        }
      });

      sugestoes.innerHTML = `
        <ul>
          <li>Olheiras: leve indicação de flacidez, sugerido tratamento com fios PDO.</li>
          <li>Mandíbula: pode ser afinada com ácido hialurônico.</li>
          <li>Papada: recomendação de enzimas lipolíticas.</li>
        </ul>
      `;
    });
  }
});
