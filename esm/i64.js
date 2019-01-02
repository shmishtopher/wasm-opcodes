import mem from './mem.js'
import num from './num.js'

export default {
  LOAD:     mem.i64_LOAD,
  LOAD8_s:  mem.i64_LOAD8_s,
  LOAD8_u:  mem.i64_LOAD8_u,
  LOAD16_s: mem.i64_LOAD16_s,
  LOAD16_u: mem.i64_LOAD16_u,
  LOAD32_s: mem.i64_LOAD32_s,
  LOAD32_U: mem.i64_LOAD32_u,

  STORE:    mem.i64_STORE,
  STORE8:   mem.i64_STORE8,
  STORE16:  mem.i64_STORE16,
  STORE32:  mem.i64_STORE32,

  CONST:    num.i64_CONST,

  EQZ:      num.i64_EQZ,
  EQ:       num.i64_EQ,
  NE:       num.i64_NE,
  LT_s:     num.i64_LT_s,
  LT_u:     num.i64_LT_u,
  GT_s:     num.i64_GT_s,
  GT_u:     num.i64_GT_u,
  LE_s:     num.i64_LE_s,
  LE_u:     num.i64_LE_u,
  GE_s:     num.i64_GE_s,
  GE_u:     num.i64_GE_u,

  CLZ:      num.i64_CLZ,
  CTZ:      num.i64_CTZ,
  POPCNT:   num.i64_POPCNT,
  ADD:      num.i64_ADD,
  SUB:      num.i64_SUB,
  MUL:      num.i64_MUL,
  DIV_s:    num.i64_DIV_s,
  DIV_u:    num.i64_DIV_u,
  REM_s:    num.i64_REM_s,
  REM_u:    num.i64_REM_u,
  AND:      num.i64_AND,
  OR:       num.i64_OR,
  XOR:      num.i64_XOR,
  SHL:      num.i64_SHL,
  SHR_s:    num.i64_SHR_s,
  SHR_u:    num.i64_SHR_u,
  ROTL:     num.i64_ROTL,
  ROTR:     num.i64_ROTR,

  EXTEND_i32_s: num.i64_EXTEND_i32_s,
  EXTEND_i32_u: num.i64_EXTEND_i32_u,
  TRUNC_f32_s:  num.i64_TRUNC_f32_s,
  TRUNC_f32_u:  num.i64_TRUNC_f32_u,
  TRUNC_f64_s:  num.i64_TRUNC_f64_s,
  TRUNC_f64_u:  num.i64_TRUNC_f64_u,

  REINTERPRET_f64:  num.i64_REINTERPRET_f64,
}