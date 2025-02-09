export type Hobby = {
  id: number;
  title: string;
  content: string;
  image: string;
};

export type EditHobbyModalProps = {
  id: number| undefined;
  openModal: boolean;
  closeModal: () => void;
  refetchHobbies: () => void;
};
