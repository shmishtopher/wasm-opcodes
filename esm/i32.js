import mem from './mem.js'
import num from './num.js'

export default {
  LOAD:     mem.i32_LOAD,
  LOAD8_s:  mem.i32_LOAD8_s,
  LOAD8_u:  mem.i32_LOAD8_u,
  LOAD16_s: mem.i32_LOAD16_s,
  LOAD16_u: mem.i32_LOAD16_u,

  STORE:    mem.i32_STORE,
  STORE8:   mem.i32_STORE8,
  STORE16:  mem.i32_STORE16,

  CONST:    num.i32_CONST,

  EQZ:      num.i32_EQZ,
  EQ:       num.i32_EQ,
  NE:       num.i32_NE,
  LT_s:     num.i32_LT_s,
  LT_u:     num.i32_LT_u,
  GT_s:     num.i32_GT_s,
  GT_u:     num.i32_GT_u,
  LE_s:     num.i32_LE_s,
  LE_u:     num.i32_LE_u,
  GE_s:     num.i32_GE_s,
  GE_u:     num.i32_GE_u,

  CLZ:      num.i32_CLZ,
  CTZ:      num.i32_CTZ,
  POPCNT:   num.i32_POPCNT,
  ADD:      num.i32_ADD,
  SUB:      num.i32_SUB,
  MUL:      num.i32_MUL,
  DIV_s:    num.i32_DIV_s,
  DIV_u:    num.i32_DIV_u,
  REM_s:    num.i32_REM_s,
  REM_u:    num.i32_REM_u,
  AND:      num.i32_AND,
  OR:       num.i32_OR,
  XOR:      num.i32_XOR,
  SHL:      num.i32_SHL,
  SHR_s:    num.i32_SHR_s,
  SHR_u:    num.i32_SHR_u,
  ROTL:     num.i32_ROTL,
  ROTR:     num.i32_ROTR,

  WRAP_i64:     num.i32_WRAP_i64,
  TRUNC_f32_s:  num.i32_TRUNC_f32_s,
  TRUNC_f32_u:  num.i32_TRUNC_f32_u,
  TRUNC_f64_s:  num.i32_TRUNC_f64_s,
  TRUNC_f64_u:  num.i32_TRUNC_f64_u,

  REINTERPRET_f32:  num.i32_REINTERPRET_f32,
}