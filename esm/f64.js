import mem from './mem.js'
import num from './num.js'

export default {
  LOAD:   mem.f64_LOAD,
  STORE:  mem.f64_STORE,

  CONST:  num.f64_CONST,

  EQ:     num.f64_EQ,
  NE:     num.f64_NE,
  LT:     num.f64_LT,
  GT:     num.f64_GT,
  LE:     num.f64_LE,
  GE:     num.f64_GE,

  ABS:      num.f64_ABS,
  NEG:      num.f64_NEG,
  CEIL:     num.f64_CEIL,
  FLOOR:    num.f64_FLOOR,
  TRUNC:    num.f64_TRUNC,
  NEAREST:  num.f64_NEAREST,
  SQRT:     num.f64_SQRT,
  ADD:      num.f64_ADD,
  SUB:      num.f64_SUB,
  MUL:      num.f64_MUL,
  DIV:      num.f64_DIV,
  MIN:      num.f64_MIN,
  MAX:      num.f64_MAX,
  COPYSIGN: num.f64_COPYSIGN,

  CONVERT_i32_s:  num.f64_CONVERT_i32_s,
  CONVERT_i32_u:  num.f64_CONVERT_i32_u,
  CONVERT_i64_s:  num.f64_CONVERT_i64_s,
  CONVERT_i64_u:  num.f64_CONVERT_i64_u,
  PROMOTE_f32:    num.f64_PROMOTE_f32,

  REINTERPRET_i64:  num.f64_REINTERPRET_i64,
}