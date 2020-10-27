package com.danilo.kyros.exceptions

import com.danilo.kyros.dtos.ResponseDTO
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.http.converter.HttpMessageNotReadableException
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.context.request.WebRequest
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler

@ControllerAdvice
class ExceptionHandlerController: ResponseEntityExceptionHandler() {

    @ExceptionHandler(EmailAlreadyTakenException::class)
    fun handleEmailAlreadyTaken(exception: EmailAlreadyTakenException) =
            ResponseEntity(ResponseDTO(exception.message), HttpStatus.CONFLICT)

    @ExceptionHandler(BadRequestException::class)
    fun handleBadRequest(exception: BadRequestException) =
            ResponseEntity(ResponseDTO(exception.message), HttpStatus.BAD_REQUEST)

    @ExceptionHandler(UnauthorizedException::class)
    fun unauthorizedException(exception: UnauthorizedException) =
            ResponseEntity(ResponseDTO(exception.message), HttpStatus.UNAUTHORIZED)

    override fun handleHttpMessageNotReadable(ex: HttpMessageNotReadableException, headers: HttpHeaders, status: HttpStatus, request: WebRequest): ResponseEntity<Any> =
            ResponseEntity(ResponseDTO("you forgot a required field"), HttpStatus.BAD_REQUEST)

}