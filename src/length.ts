const Unit = ["%", "px"] as const;
type unit = typeof Unit[number];

type length_type = "Intrinsic" | "Extrinsic";

const IntrinsicLengthName = ["min-content", "max-content", "fit-content"] as const;
type intrinsic_length_name = typeof IntrinsicLengthName[number];

function isIntrinsicLengthName(str: string): str is intrinsic_length_name {
  return !!IntrinsicLengthName.find((s) => s === str);
}
abstract class Length {
  abstract get type(): length_type;
  abstract get pxAmount(): number;
  abstract get isPercentage():boolean;
}

export type length = Length;

abstract class ExtrinsicLength extends Length {
  get type(): length_type {
    return "Extrinsic";
  }
}

class PixelLength extends ExtrinsicLength {
  amount: number;
  constructor(amount: number) {
    super();
    this.amount = amount;
  }
  get pxAmount(): number {
    return this.amount;
  }
 get isPercentage(): boolean {
      return false;
  }
}
class PercentageLength extends ExtrinsicLength {
  amount: number;
  pxAmount: number;
  constructor(amount: number) {
    super();
    this.amount = amount;
  }
  get isPercentage(): boolean {
    return true;
}
}
class IntrinsicLength extends Length {
  name: intrinsic_length_name;
  pxAmount: number;
  constructor(name: intrinsic_length_name) {
    super();
    this.name = name;
  }
  get type(): length_type {
    return "Intrinsic";
  }
  get isPercentage(): boolean {
      return false;
  }
}

export function parseLength(exp: intrinsic_length_name | string | number): length {
  if (typeof exp == "string") {
    if (isIntrinsicLengthName(exp)) {
      return new IntrinsicLength(exp);
    } else var amount = parseFloat(exp);
    if (exp.endsWith("%")) {
      return new PercentageLength(amount);
    } else {
      return new PixelLength(amount);
    }
  } else {
    return new PixelLength(exp);
  }
}
