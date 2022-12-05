export interface PersonType {
  _id: number;
  userId: string;
  hasDebt: boolean;
  creditModifier: number;
}

export interface selectedUserData {
  loanAmount: number;
  selectedMonth: number;
  selectedPerson: PersonType;
}
