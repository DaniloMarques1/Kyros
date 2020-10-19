package com.danilo.kyros.controllers

import com.danilo.kyros.dtos.SignUpUserDTO
import com.danilo.kyros.dtos.ResponseDTO
import com.danilo.kyros.dtos.SignInResponseDTO
import com.danilo.kyros.dtos.SignInUserDTO
import com.danilo.kyros.entities.KyrosUser
import com.danilo.kyros.repositories.UserRepository
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/user")
class UserController(private val userRepository: UserRepository) {

    @PostMapping("/signup")
    @ResponseStatus(HttpStatus.CREATED)
    fun signUp(@RequestBody signUpUserDTO: SignUpUserDTO): ResponseDTO {
        val userExist = userRepository.findByEmail(signUpUserDTO.email)
        if (userExist != null) {
            //TODO
        }

        val hashedPassword = "dothislater" // TODO
        val user = KyrosUser(
                name = signUpUserDTO.name,
                email = signUpUserDTO.email,
                hashedPassword = hashedPassword
        )
        userRepository.save(user)

        return ResponseDTO(message = "User created with success")
    }

    @PostMapping("/signin")
    fun signIn(@RequestBody signInUserDTO: SignInUserDTO): SignInResponseDTO {
        //TODO:
        val user = userRepository.findByEmail(signInUserDTO.email)
        if (user == null) {
            //TODO: invalid email
        }

        val hashedPassword = "dothislater" //TODO
        if (user?.hashedPassword != hashedPassword) {
            //TODO invalid password
        }

        //TODO: return token
        return SignInResponseDTO(token = user?.id.toString(), kyrosUser = user!!)
    }

}