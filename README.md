# wasm-opcodes

```npm i wasm-opcodes --save```

1. [Control](#Control)
2. [f32](#f32)
3. [f64](#f64)
4. [Global](#Global)
5. [i32](#i32)
6. [i64](#i64)
7. [Local](#Local)
8. [Memory](#Memory)
9. [Numbers](#Numbers)
10. [Parametric](#Parametric)

## Control
```javascript
import { ctrl } from 'wasm-opcodes'
```

| control opcodes    | 
|--------------------| 
| ctrl.UNREACHABLE   | 
| ctrl.NOP           | 
| ctrl.BLOCK         | 
| ctrl.LOOP          | 
| ctrl.IF            | 
| ctrl.ELSE          | 
| ctrl.END           | 
| ctrl.BR            | 
| ctrl.BR_IF         | 
| ctrl.BR_TABLE      | 
| ctrl.RETURN        | 
| ctrl.CALL          | 
| ctrl.CALL_INDIRECT | 


## f32
```javascript
import { f32 } from 'wasm-opcodes'
```

| f32 opcodes         | 
|---------------------| 
| f32.LOAD            | 
| f32.STORE           | 
| f32.CONST           | 
| f32.EQ              | 
| f32.NE              | 
| f32.LT              | 
| f32.GT              | 
| f32.LE              | 
| f32.GE              | 
| f32.ABS             | 
| f32.NEG             | 
| f32.FLOOR           | 
| f32.TRUNC           | 
| f32.NEAREST         | 
| f32.SQRT            | 
| f32.ADD             | 
| f32.SUB             | 
| f32.MUL             | 
| f32.DIV             | 
| f32.MIN             | 
| f32.MAX             | 
| f32.COPYSIGN        | 
| f32.CONVERT_i32_s   | 
| f32.CONVERT_i32_u   | 
| f32.CONVERT_i64_s   | 
| f32.CONVERT_i64_u   | 
| f32.DEMOTE_f64      | 
| f32.REINTERPRET_i32 | 


## f64
```javascript
import { f64 } from 'wasm-opcodes'
```

| f64 opcodes         | 
|---------------------| 
| f64.LOAD            | 
| f64.STORE           | 
| f64.CONST           | 
| f64.EQ              | 
| f64.NE              | 
| f64.LT              | 
| f64.GT              | 
| f64.LE              | 
| f64.GE              | 
| f64.ABS             | 
| f64.NEG             | 
| f64.FLOOR           | 
| f64.TRUNC           | 
| f64.NEAREST         | 
| f64.SQRT            | 
| f64.ADD             | 
| f64.SUB             | 
| f64.MUL             | 
| f64.DIV             | 
| f64.MIN             | 
| f64.MAX             | 
| f64.COPYSIGN        | 
| f64.CONVERT_i32_s   | 
| f64.CONVERT_i32_u   | 
| f64.CONVERT_i64_s   | 
| f64.CONVERT_i64_u   | 
| f64.DEMOTE_f64      | 
| f64.REINTERPRET_i32 | 


## Global
```javascript
import { global } from 'wasm-opcodes'
```

| global opcodes | 
|----------------| 
| global.GET     | 
| global.SET     | 


## i32
```javascript
import { i32 } from 'wasm-opcodes'
```

| i32 opcodes         | 
|---------------------| 
| i32.LOAD            | 
| i32.LOAD8_s         | 
| i32.LOAD8_u         | 
| i32.LOAD16_s        | 
| i32.LOAD16_u        | 
| i32.STORE           | 
| i32.STORE8          | 
| i32.STORE16         | 
| i32.CONST           | 
| i32.EQZ             | 
| i32.EQ              | 
| i32.NE              | 
| i32.LT_s            | 
| i32.LT_u            | 
| i32.GT_s            | 
| i32.GT_u            | 
| i32.LE_s            | 
| i32.LE_u            | 
| i32.GE_s            | 
| i32.GE_u            | 
| i32.CLZ             | 
| i32.CTZ             | 
| i32.POPCNT          | 
| i32.ADD             | 
| i32.SUB             | 
| i32.MUL             | 
| i32.DIV_s           | 
| i32.DIV_u           | 
| i32.REM_s           | 
| i32.REM_u           | 
| i32.AND             | 
| i32.OR              | 
| i32.XOR             | 
| i32.SHL             | 
| i32.SHR_s           | 
| i32.SHR_u           | 
| i32.ROTL            | 
| i32.ROTR            | 
| i32.WRAP_i64        | 
| i32.TRUNC_f32_s     | 
| i32.TRUNC_f32_u     | 
| i32.TRUNC_f64_s     | 
| i32.TRUNC_f64_u     | 
| i32.REINTERPRET_f32 | 


## i64
```javascript
import { i64 } from 'wasm-opcodes'
```

| i64 opcodes         | 
|---------------------| 
| i64.LOAD            | 
| i64.LOAD8_s         | 
| i64.LOAD8_u         | 
| i64.LOAD16_s        | 
| i64.LOAD16_u        | 
| i64.LOAD32_s        | 
| i64.LOAD32_U        | 
| i64.STORE           | 
| i64.STORE8          | 
| i64.STORE16         | 
| i64.STORE32         | 
| i64.CONST           | 
| i64.EQZ             | 
| i64.EQ              | 
| i64.NE              | 
| i64.LT_s            | 
| i64.LT_u            | 
| i64.GT_s            | 
| i64.GT_u            | 
| i64.LE_s            | 
| i64.LE_u            | 
| i64.GE_s            | 
| i64.GE_u            | 
| i64.CLZ             | 
| i64.CTZ             | 
| i64.POPCNT          | 
| i64.ADD             | 
| i64.SUB             | 
| i64.MUL             | 
| i64.DIV_s           | 
| i64.DIV_u           | 
| i64.REM_s           | 
| i64.REM_u           | 
| i64.AND             | 
| i64.OR              | 
| i64.XOR             | 
| i64.SHL             | 
| i64.SHR_s           | 
| i64.SHR_u           | 
| i64.ROTL            | 
| i64.ROTR            | 
| i64.EXTEND_i32_s    | 
| i64.EXTEND_i32_u    | 
| i64.TRUNC_f32_s     | 
| i64.TRUNC_f32_u     | 
| i64.TRUNC_f64_s     | 
| i64.TRUNC_f64_u     | 
| i64.REINTERPRET_f64 | 


## Local
```javascript
import { local } from 'wasm-opcodes'
```

| local opcodes | 
|---------------| 
| local.GET     | 
| local.SET     | 
| local.TEE     | 


## Memory
```javascript
import { mem } from 'wasm-opcodes'
```

| mem opcodes      | 
|------------------| 
| mem.i32_LOAD     | 
| mem.i64_LOAD     | 
| mem.f32_LOAD     | 
| mem.f64_LOAD     | 
| mem.i32_LOAD8_s  | 
| mem.i32_LOAD8_u  | 
| mem.i32_LOAD16_s | 
| mem.i32_LOAD16_u | 
| mem.i64_LOAD8_s  | 
| mem.i64_LOAD8_u  | 
| mem.i64_LOAD16_s | 
| mem.i64_LOAD16_u | 
| mem.i64_LOAD32_s | 
| mem.i64_LOAD32_u | 
| mem.i32_STORE    | 
| mem.i64_STORE    | 
| mem.f32_STORE    | 
| mem.f64_STORE    | 
| mem.i32_STORE8   | 
| mem.i32_STORE16  | 
| mem.i64_STORE8   | 
| mem.i64_STORE16  | 
| mem.i64_STORE32  | 
| mem.SIZE         | 
| mem.GROW         | 


## Numbers
```javascript
import { num } from 'wasm-opcodes'
```

| num opcodes             | 
|-------------------------| 
| num.i32_CONST           | 
| num.i64_CONST           | 
| num.f32_CONST           | 
| num.f64_CONST           | 
| num.i32_EQZ             | 
| num.i32_EQ              | 
| num.i32_NE              | 
| num.i32_LT_s            | 
| num.i32_LT_u            | 
| num.i32_GT_s            | 
| num.i32_GT_u            | 
| num.i32_LE_s            | 
| num.i32_LE_u            | 
| num.i32_GE_s            | 
| num.i32_GE_u            | 
| num.i64_EQZ             | 
| num.i64_EQ              | 
| num.i64_NE              | 
| num.i64_LT_s            | 
| num.i64_LT_u            | 
| num.i64_GT_s            | 
| num.i64_GT_u            | 
| num.i64_LE_s            | 
| num.i64_LE_u            | 
| num.i64_GE_s            | 
| num.i64_GE_u            | 
| num.f32_EQ              | 
| num.f32_NE              | 
| num.f32_LT              | 
| num.f32_GT              | 
| num.f32_LE              | 
| num.f32_GE              | 
| num.f64_EQ              | 
| num.f64_NE              | 
| num.f64_LT              | 
| num.f64_GT              | 
| num.f64_LE              | 
| num.f64_GE              | 
| num.i32_CLZ             | 
| num.i32_CTZ             | 
| num.i32_POPCNT          | 
| num.i32_ADD             | 
| num.i32_SUB             | 
| num.i32_MUL             | 
| num.i32_DIV_s           | 
| num.i32_DIV_u           | 
| num.i32_REM_s           | 
| num.i32_REM_u           | 
| num.i32_AND             | 
| num.i32_OR              | 
| num.i32_XOR             | 
| num.i32_SHL             | 
| num.i32_SHR_s           | 
| num.i32_SHR_u           | 
| num.i32_ROTL            | 
| num.i32_ROTR            | 
| num.i64_CLZ             | 
| num.i64_CTZ             | 
| num.i64_POPCNT          | 
| num.i64_ADD             | 
| num.i64_SUB             | 
| num.i64_MUL             | 
| num.i64_DIV_s           | 
| num.i64_DIV_u           | 
| num.i64_REM_s           | 
| num.i64_REM_u           | 
| num.i64_AND             | 
| num.i64_OR              | 
| num.i64_XOR             | 
| num.i64_SHL             | 
| num.i64_SHR_s           | 
| num.i64_SHR_u           | 
| num.i64_ROTL            | 
| num.i64_ROTR            | 
| num.f32_ABS             | 
| num.f32_NEG             | 
| num.f32_CEIL            | 
| num.f32_FLOOR           | 
| num.f32_TRUNC           | 
| num.f32_NEAREST         | 
| num.f32_SQRT            | 
| num.f32_ADD             | 
| num.f32_SUB             | 
| num.f32_MUL             | 
| num.f32_DIV             | 
| num.f32_MIN             | 
| num.f32_MAX             | 
| num.f32_COPYSIGN        | 
| num.f64_ABS             | 
| num.f64_NEG             | 
| num.f64_CEIL            | 
| num.f64_FLOOR           | 
| num.f64_TRUNC           | 
| num.f64_NEAREST         | 
| num.f64_SQRT            | 
| num.f64_ADD             | 
| num.f64_SUB             | 
| num.f64_MUL             | 
| num.f64_DIV             | 
| num.f64_MIN             | 
| num.f64_MAX             | 
| num.f64_COPYSIGN        | 
| num.i32_WRAP_i64        | 
| num.i32_TRUNC_f32_s     | 
| num.i32_TRUNC_f32_u     | 
| num.i32_TRUNC_f64_s     | 
| num.i32_TRUNC_f64_u     | 
| num.i64_EXTEND_i32_s    | 
| num.i64_EXTEND_i32_u    | 
| num.i64_TRUNC_f32_s     | 
| num.i64_TRUNC_f32_u     | 
| num.i64_TRUNC_f64_s     | 
| num.i64_TRUNC_f64_u     | 
| num.f32_CONVERT_i32_s   | 
| num.f32_CONVERT_i32_u   | 
| num.f32_CONVERT_i64_s   | 
| num.f32_CONVERT_i64_u   | 
| num.f32_DEMOTE_f64      | 
| num.f64_CONVERT_i32_s   | 
| num.f64_CONVERT_i32_u   | 
| num.f64_CONVERT_i64_s   | 
| num.f64_CONVERT_i64_u   | 
| num.f64_PROMOTE_f32     | 
| num.i32_REINTERPRET_f32 | 
| num.i64_REINTERPRET_f64 | 
| num.f32_REINTERPRET_i32 | 
| num.f64_REINTERPRET_i64 | 


## Parametric
```javascript
import { para } from 'wasm-opcodes'
```

| para opcodes | 
|--------------| 
| para.DROP    | 
| para.SELECT  | 
