import { defaultSurfaceProfileId, surfaceProfiles } from "./surface-registry.js";

export function resolveSurfaceProfile(profileId = defaultSurfaceProfileId) {
    return surfaceProfiles[profileId] || surfaceProfiles[defaultSurfaceProfileId];
}
