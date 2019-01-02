import mem from './mem.js'
import num from './num.js'

export default {
  LOAD:   mem.f32_LOAD,
  STORE:  mem.f32_STORE,
  
  CONST:  num.f32_CONST,

  EQ:     num.f32_EQ,
  NE:     num.f32_NE,
  LT:     num.f32_LT,
  GT:     num.f32_GT,
  LE:     num.f32_LE,
  GE:     num.f32_GE,

  ABS:      num.f32_ABS,
  NEG:      num.f32_NEG,
  FLOOR:    num.f32_FLOOR,
  TRUNC:    num.f32_TRUNC,
  NEAREST:  num.f32_NEAREST,
  SQRT:     num.f32_SQRT,
  ADD:      num.f32_ADD,
  SUB:      num.f32_SUB,
  MUL:      num.f32_MUL,
  DIV:      num.f32_DIV,
  MIN:      num.f32_MIN,
  MAX:      num.f32_MAX,
  COPYSIGN: num.f32_COPYSIGN,

  CONVERT_i32_s:  num.f32_CONVERT_i32_s,
  CONVERT_i32_u:  num.f32_CONVERT_i32_u,
  CONVERT_i64_s:  num.f32_CONVERT_i64_s,
  CONVERT_i64_u:  num.f32_CONVERT_i64_u,
  DEMOTE_f64:     num.f32_DEMOTE_f64,

  REINTERPRET_i32:  num.f32_REINTERPRET_i32,
}