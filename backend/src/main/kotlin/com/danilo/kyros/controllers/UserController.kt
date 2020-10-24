package com.danilo.kyros.controllers

import com.danilo.kyros.dtos.SignUpUserDTO
import com.danilo.kyros.dtos.ResponseDTO
import com.danilo.kyros.dtos.SignInResponseDTO
import com.danilo.kyros.dtos.SignInUserDTO
import com.danilo.kyros.entities.KyrosUser
import com.danilo.kyros.exceptions.*
import com.danilo.kyros.repositories.UserRepository
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/user")
@CrossOrigin
class UserController(private val userRepository: UserRepository) {

    @PostMapping("/signup")
    @ResponseStatus(HttpStatus.CREATED)
    fun signUp(@RequestBody signUpUserDTO: SignUpUserDTO): ResponseDTO {

        //TODO: better way to do this in the future
        if (signUpUserDTO.password != signUpUserDTO.confirmPassword) {
            throw BadRequestException("Password and confirm password does not match")
        }

        val userExist = userRepository.findByEmail(signUpUserDTO.email)
        if (userExist != null) {
            throw EmailAlreadyTakenException("Email already taken")
        }

        val user = KyrosUser(
                name = signUpUserDTO.name,
                email = signUpUserDTO.email,
                hashedPassword = signUpUserDTO.password
        )
        userRepository.save(user)

        return ResponseDTO(message = "User created with success")
    }

    @PostMapping("/signin")
    fun signIn(@RequestBody signInUserDTO: SignInUserDTO): SignInResponseDTO {
        val user = userRepository.findByEmail(signInUserDTO.email)
                ?: throw BadRequestException("Invalid email")

        if (user.hashedPassword != signInUserDTO.password) {
            throw BadRequestException("Invalid Password")
        }

        //TODO: return token
        return SignInResponseDTO(token = user.id.toString(), user = user)
    }

}
