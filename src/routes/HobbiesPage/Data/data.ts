// export const hobby1 = `
// Online gaming has become a major part of my life, providing a fun and exciting escape. 
// Whether I'm teaming up with friends or challenging myself in competitive matches, 
// gaming gives me a sense of achievement and connection.`;

// export const hobby2 = `Hiking has become my way of escaping the everyday and reconnecting
//             with nature. Each trail offers something new—whether it’s a
//             challenge, a breathtaking view, or a moment of peace. I’ve learned
//             to appreciate the simple things: the fresh air, the sounds of the
//             forest, and the satisfaction of reaching the summit.`;

//interface for Hobby to ensure type safety and each object in the hobbies array has the expected properties
interface Hobby {
  title: string;   //foldeer Data, models, 
  content: string;
  image: string;
}

export const hobbies: Hobby[] = [
  {
    title: "Gaming",
    content: `Online gaming has become a major part of my life, providing a fun and exciting escape. 
                    Whether I'm teaming up with friends or challenging myself in competitive matches, 
                    gaming gives me a sense of achievement and connection.`,
    image: "/online-gaming.jpg",
  },

  {
    title: "Hiking",
    content: `Hiking has become my way of escaping the everyday and reconnecting
            with nature. Each trail offers something new—whether it’s a
            challenge, a breathtaking view, or a moment of peace. I’ve learned
            to appreciate the simple things: the fresh air, the sounds of the
            forest, and the satisfaction of reaching the summit.`,
    image: "/hike.jpg",
  },
];
