type unit = "%" | "px";

export type Size = {
  amount: number ;
  unit: unit;
} | "fit-content";
type align_base = "start" | "end" | "center";

class AbsolutePosition  {
  self_base: align_base;
  parent_base: align_base;
}

type FloatPosition = Size & {
  parent_base: align_base;
}
export type Position  =  AbsolutePosition|FloatPosition;

export function dim(exp: string | number): Size {
  if (typeof exp === "number") {
    return { amount: exp };
  }
  if (exp.endsWith("%")) {
    return {
      amount: parseFloat(exp),
      unit: "%",
    };
  } else {
    return { amount: parseFloat(exp) };
  }
}
export function pos(exp: string | number): Position {
  // if (typeof exp == "number") {
  //   return { amount: exp, unit: 'px', parent_base: 'start'};
  // }
  // var tokens = exp.split(/\s+/);
  // var pos = pos(tokens[0]);
  // var base = "center" as align_base;
  // if (tokens.length > 1) {
  //   if (["top", "left", "start"].includes(tokens[1])) base = "start";
  //   if (["bottom", "right", "end"].includes(tokens[1])) base = "end";
  //   if (["center", "middle"].includes(tokens[1])) base = "center";
  // }
  // (pos as Position).base = base;
  return null; 
}

export function dims(exp: string[] | number[]): Size[] {
  return exp.flatMap(dim);
}
export function poses(exp: string[] | number[]): Position[] {
  return exp.flatMap(pos);
}
