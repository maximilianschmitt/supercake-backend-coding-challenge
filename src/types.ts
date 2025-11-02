export type User = {
  id: string;
  name: string;
};

export type Tip = {
  id: string;
  senderId: string;
  recipientId: string;
  amount: number;
};
