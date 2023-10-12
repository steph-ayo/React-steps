import Steps from "./Steps";
import StepMessage from "./StepMessage";

export const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <StepMessage step={1}>
        <p>Pass in content</p>
      </StepMessage>
      <StepMessage step={2}>
        <p>Read children prop</p>
      </StepMessage>
    </div>
  );
}
