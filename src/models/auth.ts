export interface AuthState {
    email: string;
    isLoading: boolean;
    isAuthenticated: boolean;
    error: string | null;
}