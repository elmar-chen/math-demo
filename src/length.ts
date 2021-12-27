import { indexOf } from "zrender/lib/core/util";

type unit = "%" | "px";
type length_type = "Intrinsic"|"Extrinsic";

type intrinsic_length_name = "min-content"|"max-content"|'fit-content';

export type length = {
  amount: number ;
  unit: unit;
  type: length_type;
} | "fit-content";


class ExtrinsicLength{
  amount: number;
  unit: 'px'|'%';
  type: length_type = 'Extrinsic';
}

class IntrinsicLength {
  name: intrinsic_length_name;
  type: length_type = 'Intrinsic';
  unit: null;
  amount: 0;
}

function parseLength(exp:intrinsic_length_name):length{
  return new IntrinsicLength();
}
function parseLength(exp:string){

}
type align_base = "start" | "end" | "center";
class AbsolutePosition  {
  self_base: align_base;
  parent_base: align_base;
}

type FloatPosition = length & {
  parent_base: align_base;
}
export type Position  =  AbsolutePosition|FloatPosition;

export function dim(exp: string | number): length {
  if (typeof exp === "number") {
    return { amount: exp, unit:'px' };
  }
  if (exp.endsWith("%")) {
    return {
      amount: parseFloat(exp),
      unit: "%",
    };
  } else {
    return { amount: parseFloat(exp), unit:'px'};
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

export function dims(exp: string[] | number[]): length[] {
  return exp.flatMap(dim);
}
export function poses(exp: string[] | number[]): Position[] {
  return exp.flatMap(pos);
}

type align_base = "start" | "end" | "center";

// class AbsolutePosition  {
//   self_base: align_base;
//   parent_base: align_base;
// }

// type FloatPosition = Length & {
//   parent_base: align_base;
// }
// export type Position  =  AbsolutePosition|FloatPosition;

// export function dim(exp: string | number): Length {
//   if (typeof exp === "number") {
//     return { amount: exp, unit:'px' };
//   }
//   if (exp.endsWith("%")) {
//     return {
//       amount: parseFloat(exp),
//       unit: "%",
//     };
//   } else {
//     return { amount: parseFloat(exp), unit:'px'};
//   }
// }
// export function pos(exp: string | number): Position {
//   // if (typeof exp == "number") {
//   //   return { amount: exp, unit: 'px', parent_base: 'start'};
//   // }
//   // var tokens = exp.split(/\s+/);
//   // var pos = pos(tokens[0]);
//   // var base = "center" as align_base;
//   // if (tokens.length > 1) {
//   //   if (["top", "left", "start"].includes(tokens[1])) base = "start";
//   //   if (["bottom", "right", "end"].includes(tokens[1])) base = "end";
//   //   if (["center", "middle"].includes(tokens[1])) base = "center";
//   // }
//   // (pos as Position).base = base;
//   return null; 
// }

// export function dims(exp: string[] | number[]): Length[] {
//   return exp.flatMap(dim);
// }
// export function poses(exp: string[] | number[]): Position[] {
//   return exp.flatMap(pos);
// }
