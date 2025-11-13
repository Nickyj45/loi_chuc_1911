document.addEventListener('DOMContentLoaded', () => {
    const flyingContainer = document.getElementById('flying-elements-container');
    
    // Các từ và biểu tượng sẽ bay lên
    const wordsAndHearts = [
        "Yêu anh", "Love you", "hạnh phúc nhé","Love u so much", "Chúc mừng", "Hạnh phúc nha", "❤️", "💖", "💞", "19/11","Anh là nhất",
    "Yêu thương trọn vẹn",
    "Tuyệt vời nhất",
    "Chồng yêu",
    "Bên nhau trọn đời",
    "Luôn vững vàng",
    "Tự hào về anh",
    "Đồng hành cùng em",
    "Anh là người hùng",
    "Cùng nhau vượt qua",
    "Chúc mừng 19/11",
    "Người đàn ông của em"
    ];

    // Hàm tạo một phần tử bay ngẫu nhiên
    function createFlyingElement() {
        const element = document.createElement('span');
        const content = wordsAndHearts[Math.floor(Math.random() * wordsAndHearts.length)];
        element.textContent = content;
        element.classList.add('flying-element');

        if (content.includes('❤️') || content.includes('💖') || content.includes('💞')) {
            element.classList.add('heart');
        }

        // Đặt vị trí ngẫu nhiên ở phía dưới màn hình
        element.style.left = `${Math.random() * 100}%`;
        element.style.bottom = `${Math.random() * 10 - 5}vh`; // Bắt đầu từ dưới hoặc hơi ẩn
        element.style.animationDelay = `${Math.random() * 5}s`; // Delay ngẫu nhiên để không xuất hiện cùng lúc
        element.style.fontSize = `${3 + Math.random() * 4}vw`; // Kích thước ngẫu nhiên

        flyingContainer.appendChild(element);

        // Xóa phần tử sau khi animation kết thúc để tránh làm đầy DOM
        element.addEventListener('animationend', () => {
            element.remove();
        });
    }

    // Tạo liên tục các phần tử bay
    setInterval(createFlyingElement, 100); // Mỗi 0.8 giây tạo một phần tử mới

    // --- Hiệu ứng hạt lấp lánh (sparkle effect) ---
    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        
        const size = Math.random() * 5 + 2; // Kích thước hạt từ 2px đến 7px
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        
        // Vị trí ngẫu nhiên trên toàn màn hình
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;
        
        sparkle.style.animationDuration = `${Math.random() * 2 + 1}s`; // Thời gian sống ngẫu nhiên
        sparkle.style.animationDelay = `${Math.random() * 2}s`; // Delay ngẫu nhiên

        flyingContainer.appendChild(sparkle);

        sparkle.addEventListener('animationend', () => {
            sparkle.remove();
        });
    }

    // Tạo liên tục các hạt lấp lánh
    setInterval(createSparkle, 10); // Mỗi 0.1 giây tạo một hạt mới
});