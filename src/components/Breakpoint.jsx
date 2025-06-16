import { useBreakPoints } from "../hooks/useBreakpoints";

export const Breakpoint = ({ at, children }) => {
  if (!at) {
    console.error("<Breakpoint>: must specify a breakpoint for the `at` prop.");
  }
  const { active } = useBreakPoints();
  return active === at ? children : null;
};

//How to use:
// return (
//   <>
//     <Breakpoint at="xs">
//       <Button size="small">Button</Button>
//     </Breakpoint>
//     <Breakpoint at="sm">
//       <Button size="small">Button</Button>
//     </Breakpoint>
//     <Breakpoint at="md">
//       <Button>Button</Button>
//     </Breakpoint>
//     <Breakpoint at="lg">
//       <Button size="large">Button</Button>
//     </Breakpoint>
//   </>
// );
