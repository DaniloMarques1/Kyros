package com.danilo.kyros.exceptions

import java.lang.RuntimeException

data class BadRequestException(override val message: String): RuntimeException()
