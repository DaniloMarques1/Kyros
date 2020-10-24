package com.danilo.kyros.exceptions

import java.lang.RuntimeException

data class EmailAlreadyTakenException(override val message: String): RuntimeException()
