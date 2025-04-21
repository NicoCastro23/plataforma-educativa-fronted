// src/app/models/auth-response.dto.ts
export interface AuthResponseDto {
    ok: boolean;
    token?: string;
    name?: string;
    role?: string;
    userType?: string;
    message?: string;
  }
  