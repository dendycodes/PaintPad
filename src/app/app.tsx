"use client";
import BlackboardCore from "./core/blackboard-core";
import { RecoilRoot } from "recoil";
export default function App() {
  return (
    <div>
      <RecoilRoot>
        <BlackboardCore />
      </RecoilRoot>
    </div>
  );
}
