import hashlib
import json
import secrets

def create_commit(measurement: dict):
    nonce = secrets.token_hex(32)
    payload = {"measurement": measurement, "nonce": nonce}
    commitment = hashlib.sha256(
        json.dumps(payload, sort_keys=True).encode()
    ).hexdigest()
    return {"commitment": commitment, "nonce": nonce, "measurement": measurement}

def verify_reveal(measurement: dict, nonce: str, commitment: str) -> bool:
    payload = {"measurement": measurement, "nonce": nonce}
    calculated = hashlib.sha256(
        json.dumps(payload, sort_keys=True).encode()
    ).hexdigest()
    return calculated == commitment
