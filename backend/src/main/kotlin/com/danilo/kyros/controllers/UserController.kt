package com.danilo.kyros.controllers

import com.danilo.kyros.dtos.*
import com.danilo.kyros.services.UserService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/user")
@CrossOrigin
class UserController(private val userService: UserService) {

    @PostMapping("/signup")
    fun signUp(@RequestBody signUpRequestDTO: SignUpRequestDTO): ResponseEntity<SignUpResponseDTO> {
        val user = userService.signUp(signUpRequestDTO)
        return ResponseEntity(SignUpResponseDTO(user), HttpStatus.CREATED)
    }

    @PostMapping("/signin")
    fun signIn(@RequestBody signInRequestDTO: SignInRequestDTO): ResponseEntity<SignInResponseDTO> {
        val user = userService.signIn(signInRequestDTO)
        //TODO: return token
        return ResponseEntity(SignInResponseDTO(token = user.id.toString(), user = user), HttpStatus.OK)
    }

}
