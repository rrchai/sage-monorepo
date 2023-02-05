package org.sagebionetworks.openchallenges.organization.service.model.entity;

import java.time.OffsetDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.NaturalId;

/**
 * The User information saved to DB.
 *
 * <p>The following properties are saved in Keycloak: email, password (hash).
 */
@Entity
@Table(name = "challenge_organization")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrganizationEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(nullable = false, updatable = false)
  private Long id;

  @Column(nullable = false)
  private String name;

  @Column(nullable = false)
  private String email;

  @NaturalId(mutable = true)
  @Column(nullable = false, unique = true)
  private String login;

  @Column(name = "avatar_url", nullable = true)
  private String avatarUrl;

  @Column(name = "website_url", nullable = true)
  private String websiteUrl;

  @Column(nullable = true)
  private String description;

  @Column(name = "created_at")
  private OffsetDateTime createdAt;

  @Column(name = "updated_at")
  private OffsetDateTime updatedAt;
}