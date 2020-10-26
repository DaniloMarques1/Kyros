package com.danilo.kyros.services

import com.danilo.kyros.dtos.SignInRequestDTO
import com.danilo.kyros.dtos.SignUpRequestDTO
import com.danilo.kyros.entities.KyrosUser
import com.danilo.kyros.exceptions.BadRequestException
import com.danilo.kyros.exceptions.EmailAlreadyTakenException
import com.danilo.kyros.repositories.UserRepository
import org.springframework.stereotype.Service

@Service
class UserService(private val userRepository: UserRepository) {

    fun signUp(signUpRequestDTO: SignUpRequestDTO): KyrosUser {
        //TODO: better way to do this in the future
        if (signUpRequestDTO.password != signUpRequestDTO.confirmPassword) {
            throw BadRequestException("Password and confirm password does not match")
        }

        val userExist = userRepository.findByEmail(signUpRequestDTO.email)
        if (userExist != null) {
            throw EmailAlreadyTakenException("Email already taken")
        }

        return save(KyrosUser(
                name = signUpRequestDTO.name,
                email = signUpRequestDTO.email,
                hashedPassword = signUpRequestDTO.password,
                leagues = mutableListOf()
        ))
    }

    fun signIn(signInRequestDTO: SignInRequestDTO): KyrosUser {
        val user = userRepository.findByEmail(signInRequestDTO.email)
                ?: throw BadRequestException("Invalid email")

        if (user.hashedPassword != signInRequestDTO.password) {
            throw BadRequestException("Invalid Password")
        }

        return user
    }

    fun findById(id: Long): KyrosUser = userRepository.findById(id).orElseThrow()

    fun save(user: KyrosUser): KyrosUser = userRepository.save(user)
}