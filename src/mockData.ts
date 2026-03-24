import { Athlete, Delegation } from "./types";

export const MOCK_ATHLETES: Athlete[] = [
  {
    id: "1",
    name: "Marcos Veloz",
    sport: "Atletismo",
    delegation: "ESP",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBPVX85JntR8iMrMDE_0QOtxjxfspeI5u2gcUy7Yk11GjprpZfAsLohGUQG1WTfn_JoCi3UgBX4mOguXTIrVRjjTltbjZ2qY7woe-isOmXY5azq6XRDDoviK3CZ6g9ETqyzmJXWn4urg63axrVC6csKaEDTcatO9dYUvIoQANOhkIx2cTGES5zcgi39ppc7Pfl40kOFHcFG2Yh4ZDY81DILcq-OKK6CrMHBlaj3PmP8q0ZPQGHGUTu6MFXAyrLkSWCbJBZlQRMbeu0",
    rank: 1,
    record: "9.58s",
    progress: 100,
  },
  {
    id: "2",
    name: "Elena Gómez",
    sport: "Natación",
    delegation: "ESP",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6ZWCcab7nOQbmx6hAH4S1foeYxkx5W6a25kTgzsvV77DEw2zLjnao4AuTUBnx5jLJWUAEXgokTP5SMJFkiIcBt4vFiQrysQnOiXaQUq7V1NTiWaPMUNH4ir51rGGSlDPPPwwpCpXcLK0bXGSOqWXP_JLA8ssv81zWxexP8VIHpqIerXMSaWCftT3SyjY2YNmlcmIk2iswfjvtpgwWhV9LWhe3rGix43BDJssVZjP3XSRdOOezosgBXU3tzKK1hqvBlZ9z7kX1B-Wq",
    rank: 2,
    progress: 95,
  },
  {
    id: "3",
    name: "Carlos Ruiz",
    sport: "Pesas",
    delegation: "MEX",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpOgtJY9qw7XnpjhdUERO0Vk4s4iSIrBc02Vnj064S9o-C577Hxjg69sR5jIcyL-FOIS8WpyPU-VR9EaVLG5GB1gRbtASL7R6tb-mll4XvaMvKMjNtLjf-sZ6erKJ3ucenvNmYE2oRYSaeH7NlWcF7fULeicBeQ5P5H1IUpMTKMwOUIJUIYV4eeOAI7IGZ3uVmr8hGXCvcGGAVl36Spmtd9tBEXtPcTm9MetWPMXUTSXLDRais4Az-sT3udvTwgmoCC4DEoGLrCG04",
    rank: 3,
    progress: 90,
  },
  {
    id: "4",
    name: "Lucía Méndez",
    sport: "Gimnasia",
    delegation: "ARG",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHVPWZp233FZswy2952KQ1VbuwpB93wwZ3jg9nanP7Tf7NLelKLxa3xdGoIG7gYgiXJBHDPE5xBNK9L0pQrH28DlPeT0QCh4TMa4fUdGE1fkIOvC8dUCN3aPUaSV14uOkY4YU-axuBy-odM6H4PVu7oFNQuGbtfnVUg8psqoYzJBHXxw4_NSEMu3qy8Svk3FA6PWi7t6w4tix31xibBnzrTBreOUSuUqba757IjDhMGZfOMsC4aE_5Ijt4N389rohwvlLNonPY3PWs",
    progress: 88,
  },
  {
    id: "5",
    name: "Roberto Solis",
    sport: "Ciclismo",
    delegation: "MEX",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBu6oxJz3e-LDbFvBxP2OhnlWAfBiE8w2St3sarV-oVoLLoTnHwgJ_IqBVdZIUp1krV5WrcF-80DSCwFvRu4rJHjkQelVv7wxNtdYQ7XH0Fn4tNfWHiqxoiGd2DqOQkdzQ7EFsw4_bUHwh0DHJCBOe_K_JO0jXGYO33qh8Np2NeMwqUT7zbjProEKbF4-MuJ_lKlNG9UvfLP_9_Gpnld7PpgYYXDTeFkUIfi5N4uI1fbIyU_wA03cur-XPlG5SUgHBR-G9R0b7QkbyD",
    progress: 92,
  },
  {
    id: "6",
    name: "Saúl Álvarez",
    sport: "Boxeo",
    delegation: "USA",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCA-6cTov1PHuQ_QHNv_GKDbTPIEs8ctPHvXuEOp5J6PVKvZywbxedHAHhxYnSiJsSidwpGhLnD-qPbKH3F0NFyIX2GGMjKme_WFVgQ4A9PkB88CsBlvXgPU2nFtq_TXVc7QaGW6kK9UGGYxdmXvoiF2Hl24TNUE647fcdwefQ8B1260nv9-ZttMs41kgiUwqb2kwFf17iVwxSxI5pblFn64myNICtw09AMbCto5Oq5Dorr4up0md00DFTLH3KdXQETDiGMmHBcXa1y",
    progress: 75,
  },
  {
    id: "7",
    name: "Marta Soria",
    sport: "Natación",
    delegation: "ESP",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvJ7SbZiEWI8TIJNs53g65cVJCNlWb7m1q0QXJrdDxTWQ1xsE3lo8ZjX4tB3YfLNa8MdA2LNJ1RMqw-cNMsYNAhV5QpKy26aB-1Y-mokU-0pS_NCC0AjqhiyxX06Z9Dqas03LhlZi7r6z5PzFNlhC3RuZGi1n30KCYlRi6cKkyXF1FxODsj06mCM4cn3URDw7dmNiLdIBfOK_16rdvhQSaHqg8cCcqMReQ-W5IDN1bwHRx2gjWOuPoDSfBpplhfiZRyIrEDger8dyv",
    progress: 98,
  },
  {
    id: "8",
    name: "Felipe Rojas",
    sport: "Atletismo",
    delegation: "COL",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTsCY0Rytbx766rLfgZaM3hCE5or9mDh1zFzxM2eUpqFR8UTib9X0fS2Jxl8s2BjT3KPWwLUpOdDQ3DNsSUv3RgXnn8Y4prseIuIfhWsxueh4N-9REtXy85liEWDiEEKXLxFG1aE5EL1gVuL1dP9AriBTX77ZdiXqPRP8AG8PzBM15h80HCq3FHycq21H-Esh2lIMccVIyM2i8PXVPvK_CzHdp90O0JFbljxdAIF9bTbwlyDEtOLcHNeVubLQm3ZhQ9SfaE2-u54vE",
    progress: 82,
  },
];

export const MOCK_DELEGATIONS: Delegation[] = [
  { id: "1", name: "Team España", gold: 12, silver: 8, bronze: 5, rank: 1 },
  { id: "2", name: "Team USA", gold: 10, silver: 14, bronze: 9, rank: 2 },
];
