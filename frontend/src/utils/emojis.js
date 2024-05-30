export const funEmojis = [
    "😀",  // Grinning Face
    "😂",  // Face with Tears of Joy
    "😎",  // Smiling Face with Sunglasses
    "😍",  // Smiling Face with Heart-Eyes
    "🤔",  // Thinking Face
    "😭",  // Loudly Crying Face
    "😴",  // Sleeping Face
    "😷",  // Face with Medical Mask
    "🤒",  // Face with Thermometer
    "😡",  // Pouting Face
    "👋",  // Waving Hand
    "👍",  // Thumbs Up
    "👎",  // Thumbs Down
    "👏",  // Clapping Hands
    "🙏",  // Folded Hands
    "🙌",  // Raising Hands
    "👐",  // Open Hands
    "🤝",  // Handshake
    "💪",  // Flexed Biceps
    "🤳",  // Selfie
    "🐶",  // Dog Face
    "🐱",  // Cat Face
    "🐭",  // Mouse Face
    "🐹",  // Hamster Face
    "🐰",  // Rabbit Face
    "🦊",  // Fox Face
    "🐻",  // Bear Face
    "🐼",  // Panda Face
    "🐨",  // Koala
    "🐯",  // Tiger Face
    "🍏",  // Green Apple
    "🍎",  // Red Apple
    "🍌",  // Banana
    "🍉",  // Watermelon
    "🍇",  // Grapes
    "🍓",  // Strawberry
    "🍒",  // Cherries
    "🍑",  // Peach
    "🍍",  // Pineapple
    "🌹",  // Rose
    "🌻",  // Sunflower
    "🌼",  // Blossom
    "🌸",  // Cherry Blossom
    "🌺",  // Hibiscus
    "🌴",  // Palm Tree
    "🌵",  // Cactus
    "🍂",  // Fallen Leaf
    "🍁",  // Maple Leaf
    "🌈"   // Rainbow
]

export const getRandomEmoji = () => {
    return funEmojis[Math.floor(Math.random() * funEmojis.length)]
}