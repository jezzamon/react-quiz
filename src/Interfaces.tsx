export interface IAuthor {
  name: string;
    imageUrl: string;
    imageSource: string;
    books: string[]
}

export interface ITurnProps {
  turnData: {
    author : IAuthor; 
    books: string[]
  }; 
  highlight: string; 
  onAnswerSelected: () => null;
}