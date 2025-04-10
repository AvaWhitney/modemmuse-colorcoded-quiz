
export interface AnswerOption {
    text: string;
    tags: string[]; // Type1–Type6
  }
  
  export interface Question {
    id: string;
    prompt: string;
    options: AnswerOption[];
  }
  
  export const questions: Question[] = [
    {
      id: "Q1",
      prompt: "When your plans change last minute, what happens internally?",
      options: [
        { text: "Honestly? It’s fine. I adjust and move on.", tags: ["Type1"] },
        { text: "I act calm but immediately try to control something else instead.", tags: ["Type2", "Type4"] },
        { text: "I get slightly annoyed and have to mentally recalibrate.", tags: ["Type5"] },
        { text: "It throws me off more than I want to admit.", tags: ["Type6", "Type5"] },
        { text: "Panic. Spiral. Mentally scream into the void.", tags: ["Type6", "Type3"] }        
      ]
    },
    {
      id: "Q2",
      prompt: "You’re overwhelmed. What’s your go-to move?",
      options: [        
        { text: "Organize something. Anything. Even if it’s not helpful.", tags: ["Type2", "Type4"] },
        { text: "Take a deep breath, make a plan, prioritize.", tags: ["Type1"] },
        { text: "Scroll TikTok for 2 hours and forget why I was stressed.", tags: ["Type3"] },        
        { text: "Keep functioning like a high-speed train until I derail later.", tags: ["Type2", "Type6"] },
        { text: "Ghost everyone. Vanish emotionally. Snack quietly in the dark.", tags: ["Type6", "Type3"] }
      ]
    },
    {
      id: "Q3",
      prompt: "How easy is it for you to say no or set boundaries?",
      options: [        
        { text: "Depends. If you’re hot or I’m scared, I’ll probably say yes.", tags: ["Type5"] },
        { text: "I say yes immediately then seethe about it while fake-smiling.", tags: ["Type6", "Type3"] },
        { text: "I try, but the guilt eats me alive.", tags: ["Type2", "Type5"] },
        { text: "Pretty easy. I know what I need and I know my worth.", tags: ["Type1"] },
        { text: "I don’t set boundaries. I disappear and hope people get the hint.", tags: ["Type3", "Type6"] }
      ]
    },
    {
      id: "Q4",
      prompt: "How do you usually handle failure or messing something up?",
      options: [  
        { text: "Immediately try to prove my worth by becoming obnoxiously productive", tags: ["Type2", "Type4"] },     
        { text: "I cringe a little and move on with my life.", tags: ["Type5"] },
        { text: "I try to learn, grow, evolve, and move on.", tags: ["Type1"] },
        { text: "Replay the moment on a loop like it’s a psychological horror film.", tags: ["Type2", "Type5"] },
        { text: "I act like I don’t care but obsess over it secretly.", tags: ["Type3", "Type6"] }       
      ]
    },
    {
      id: "Q5",
      prompt: "What does rest look like for you?",
      options: [
        { text: "I schedule it. I protect it. I treat rest like a sacred ritual.", tags: ["Type1"] },
        { text: "I lie down while watching chaotic TikToks and dissociating with iced coffee.", tags: ["Type3"] },
        { text: "Resting while mentally listing everything I should be doing.", tags: ["Type2"] },
        { text: "I try to sit still but feel kind of guilty the entire time.", tags: ["Type4", "Type6"] },
        { text: "I only rest when my body physically collapses and I can no longer pretend.", tags: ["Type6", "Type5"] }
      ]
    },
    {
      id: "Q6",
      prompt: "How do you deal with not being in control?",
      options: [        
        { text: "I feel mild anxiety but try to push through.", tags: ["Type5"] },
        { text: "Micromanage something dumb like my notes app or desktop folders.", tags: ["Type2", "Type4"] },
        { text: "Wait for the universe to send me a sign, then panic when it doesn’t.", tags: ["Type6", "Type3"] },
        { text: "Impulse buy something cute and shiny or dissociate.", tags: ["Type3", "Type5"] },
        { text: "I focus on what is in my control. Like snacks. Or skincare.", tags: ["Type1"] }
      ]
    },
    {
      id: "Q7",
      prompt: "What’s your relationship with routine?",
      options: [
        { text: "Stable. We’re in a healthy long-term situationship.", tags: ["Type1"] },
        { text: "We’re on and off. I’m trying. They’re trying. It’s complicated.", tags: ["Type5"] },
        { text: "If one thing goes wrong, I unravel like a sweater caught on a door handle.", tags: ["Type2", "Type4"] },
        { text: "I fantasize about routine but never actually live it.", tags: ["Type6", "Type5"] },
        { text: "I collect productivity tools like they’re Pokémon, but follow through? Unclear.", tags: ["Type3"] }
      ]
    }
  ];
  