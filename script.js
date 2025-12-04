// Add a magnetic effect to the button
const btn = document.getElementById("accessBtn");

if (btn) {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate distance from center
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Dampen the movement (higher divisor = less movement)
    const deltaX = (x - centerX) / 6;
    const deltaY = (y - centerY) / 6;

    btn.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.05)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "";
  });
}
